"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { FiArrowUpRight, FiX } from "react-icons/fi";

import { OPENING_HOURS } from "@/lib/site";
import { withBasePath } from "@/lib/withBasePath";

import styles from "./WhatsAppWidget.module.css";

const WHATSAPP_NUMBER = "48600306425";
const STATS_KEY = "alfa:whatsapp-message-starts:v1";

const QUICK_MESSAGES = [
  {
    id: "fotowoltaika",
    label: "Fotowoltaika",
    message:
      "Dzień dobry, proszę o kontakt w sprawie instalacji fotowoltaicznej.",
  },
  {
    id: "magazyn-energii",
    label: "Magazyn energii",
    message: "Dzień dobry, proszę o kontakt w sprawie magazynu energii.",
  },
  {
    id: "elektryka-monitoring",
    label: "Elektryka / monitoring",
    message:
      "Dzień dobry, proszę o kontakt w sprawie instalacji elektrycznej lub monitoringu.",
  },
  {
    id: "szybka-wycena-domu",
    label: "Szybka wycena domu",
    message:
      "Dzień dobry, proszę o szybką wycenę instalacji dla domu w Kaliszu lub okolicy.",
  },
  {
    id: "szybka-wycena-firmy",
    label: "Szybka wycena firmy",
    message:
      "Dzień dobry, proszę o szybką wycenę instalacji dla firmy w Kaliszu lub okolicy.",
  },
];

const DEFAULT_MESSAGE =
  "Dzień dobry, proszę o kontakt w sprawie oferty dla Kalisza i okolic.";

function recordMessageStart(topic) {
  const occurredAt = new Date().toISOString();
  let localTotal = 1;

  try {
    const storedStats = JSON.parse(window.localStorage.getItem(STATS_KEY) || "null");
    const currentStats =
      storedStats && typeof storedStats === "object" ? storedStats : {};
    const currentTopics =
      currentStats.topics && typeof currentStats.topics === "object"
        ? currentStats.topics
        : {};

    localTotal = Number(currentStats.total || 0) + 1;

    window.localStorage.setItem(
      STATS_KEY,
      JSON.stringify({
        total: localTotal,
        lastStartedAt: occurredAt,
        topics: {
          ...currentTopics,
          [topic]: Number(currentTopics[topic] || 0) + 1,
        },
      }),
    );
  } catch {
    // The WhatsApp link should still work when storage is unavailable.
  }

  const analyticsEvent = {
    event: "whatsapp_message_started",
    whatsapp_source: "floating_widget",
    whatsapp_topic: topic,
    whatsapp_local_total: localTotal,
  };

  window.dataLayer = window.dataLayer || [];
  if (Array.isArray(window.dataLayer)) window.dataLayer.push(analyticsEvent);

  window.dispatchEvent(
    new CustomEvent("alfa:whatsapp-message-started", {
      detail: analyticsEvent,
    }),
  );
}

export default function WhatsAppWidget() {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [selectedTopic, setSelectedTopic] = useState("ogolne-zapytanie");

  useEffect(() => {
    const readyTimer = window.setTimeout(() => setIsReady(true), 1900);
    const promptTimer = window.setTimeout(() => setShowPrompt(true), 6200);
    const hidePromptTimer = window.setTimeout(() => setShowPrompt(false), 15000);

    return () => {
      window.clearTimeout(readyTimer);
      window.clearTimeout(promptTimer);
      window.clearTimeout(hidePromptTimer);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const openWidget = () => {
    setShowPrompt(false);
    setIsOpen(true);
  };

  const selectQuickMessage = (item) => {
    setSelectedTopic(item.id);
    setMessage(item.message);
  };

  const handleMessageChange = (event) => {
    setSelectedTopic("wlasna-wiadomosc");
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    recordMessageStart(selectedTopic);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(trimmedMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  if (!isReady) return null;

  return (
    <div className={styles.widget}>
      <section
        className={styles.panel}
        data-open={isOpen ? "true" : "false"}
        aria-hidden={!isOpen}
        aria-label="Kontakt przez WhatsApp"
        role="dialog"
      >
        <header className={styles.header}>
          <div className={styles.identity}>
            <Image
              className={styles.companyMark}
              src={withBasePath("/images/alfa-mark.svg")}
              alt=""
              width={48}
              height={45}
            />
            <div>
              <p className={styles.company}>ALFA Rafał Morańda</p>
              <p className={styles.status}>
                <FaWhatsapp aria-hidden="true" />
                WhatsApp · {OPENING_HOURS.label}
              </p>
            </div>
          </div>
          <button
            className={styles.closeButton}
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Zamknij okno WhatsApp"
            tabIndex={isOpen ? 0 : -1}
          >
            <FiX aria-hidden="true" />
          </button>
        </header>

        <div className={styles.conversation}>
          <p className={styles.eyebrow}>Wybierz temat</p>
          <div className={styles.quickReplies} role="group" aria-label="Popularne tematy">
            {QUICK_MESSAGES.map((item, index) => (
              <button
                className={styles.quickReply}
                aria-pressed={selectedTopic === item.id}
                type="button"
                key={item.id}
                onClick={() => selectQuickMessage(item)}
                tabIndex={isOpen ? 0 : -1}
              >
                <span className={styles.quickIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.quickLabel}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <form className={styles.composer} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="whatsapp-message">
            Twoja wiadomość
          </label>
          <textarea
            className={styles.textarea}
            id="whatsapp-message"
            value={message}
            onChange={handleMessageChange}
            maxLength={500}
            rows={3}
            tabIndex={isOpen ? 0 : -1}
          />
          <button
            className={styles.sendButton}
            type="submit"
            disabled={!message.trim()}
            tabIndex={isOpen ? 0 : -1}
          >
            <FaWhatsapp aria-hidden="true" />
            <span>Przejdź do WhatsApp</span>
            <FiArrowUpRight aria-hidden="true" />
          </button>
          <p className={styles.disclaimer}>
            Wiadomość otworzy się w WhatsApp — nic nie wysyłamy automatycznie.
          </p>
        </form>
      </section>

      <div
        className={styles.prompt}
        data-visible={showPrompt && !isOpen ? "true" : "false"}
        aria-hidden={!showPrompt || isOpen}
      >
        <button
          className={styles.promptBody}
          type="button"
          onClick={openWidget}
          tabIndex={showPrompt && !isOpen ? 0 : -1}
        >
          <strong>Masz pytanie?</strong>
          <span>Napisz do nas na WhatsApp</span>
        </button>
        <button
          className={styles.promptClose}
          type="button"
          onClick={() => setShowPrompt(false)}
          aria-label="Ukryj podpowiedź WhatsApp"
          tabIndex={showPrompt && !isOpen ? 0 : -1}
        >
          <FiX aria-hidden="true" />
        </button>
      </div>

      <button
        className={styles.launcher}
        type="button"
        onClick={isOpen ? () => setIsOpen(false) : openWidget}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Zamknij kontakt WhatsApp" : "Otwórz kontakt WhatsApp"}
      >
        <span className={styles.launcherIcon} aria-hidden="true">
          {isOpen ? <FiX /> : <FaWhatsapp />}
        </span>
        <span className={styles.launcherText}>
          <span>Napisz do nas</span>
          <strong>WhatsApp</strong>
        </span>
      </button>
    </div>
  );
}
