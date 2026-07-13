import { createContext, useContext, useEffect, useState } from 'react'
import { Reveal } from './hooks.jsx'

/* Every translatable string, keyed the same way the original design was.
   Values may contain trusted inline HTML (green highlights, arrows, <br>). */
export const translations = {
  nav_about: { en: 'About', de: 'Über uns' },
  nav_services: { en: 'Services', de: 'Leistungen' },
  nav_cases: { en: 'Case Studies', de: 'Fallstudien' },
  nav_pricing: { en: 'Pricing', de: 'Preise' },
  h_cta: { en: 'Book Free Audit', de: 'Kostenloses Audit' },

  hero_badge: {
    en: 'Growth marketing for local German businesses',
    de: 'Wachstumsmarketing für lokale Unternehmen in Deutschland',
  },
  hero_h1: {
    en: 'Become your city\'s<br><span style="position:relative;white-space:nowrap;">obvious choice</span>.',
    de: 'Werden Sie die klare<br><span style="position:relative;white-space:nowrap;">erste Wahl</span> Ihrer Stadt.',
  },
  hero_p: {
    en: 'Stop juggling fragmented freelancers. Symufolk replaces them with <strong style="color:#FFFFFF;font-weight:700;">1 senior team, 1 clear plan, and 1 monthly bill</strong>, so you grow predictably and profitably.',
    de: 'Schluss mit dem Jonglieren einzelner Freelancer. Symufolk ersetzt sie durch <strong style="color:#FFFFFF;font-weight:700;">1 erfahrenes Team, 1 klaren Plan und 1 monatliche Rechnung</strong>, damit Sie planbar und profitabel wachsen.',
  },
  hero_cta: {
    en: 'Claim your free growth audit <span style="font-size:18px;">→</span>',
    de: 'Kostenloses Wachstums-Audit sichern <span style="font-size:18px;">&rarr;</span>',
  },
  hero_micro: {
    en: '100% Free &nbsp;·&nbsp; 30 Minutes &nbsp;·&nbsp; Zero Obligation',
    de: '100% kostenlos &nbsp;·&nbsp; 30 Minuten &nbsp;·&nbsp; unverbindlich',
  },

  au_label: { en: 'Free Growth Audit', de: 'Kostenloses Wachstums-Audit' },
  au_title: { en: 'Monthly revenue', de: 'Monatlicher Umsatz' },
  au_sub: { en: 'Local visibility → bookings → repeat', de: 'Lokale Sichtbarkeit → Buchungen → Wiederkehr' },
  au_found: { en: 'Found', de: 'Gefunden' },
  au_trusted: { en: 'Trusted', de: 'Vertraut' },
  au_retained: { en: 'Retained', de: 'Gebunden' },
  au_v1: { en: 'Top 3', de: 'Top 3' },
  au_v2: { en: '3.4× ROAS', de: '3,4× ROAS' },
  au_v3: { en: '480 list', de: '480 Kontakte' },
  db: { en: 'Direct bookings', de: 'Direktbuchungen' },
  au_chipsaved: { en: 'Saved / year', de: 'Ersparnis / Jahr' },
  au_now: { en: 'Now', de: 'Jetzt' },

  tr1: {
    en: '<span style="color:#00E6A3;">★★★★★</span> trusted by German local leaders',
    de: '<span style="color:#00E6A3;">★★★★★</span> vertraut von lokalen Marktführern',
  },
  tr2: { en: '100% DSGVO compliant', de: '100% DSGVO-konform' },
  tr3: { en: 'One team, one invoice', de: 'Ein Team, eine Rechnung' },
  tr4: { en: '1-day response guarantee', de: 'Antwort innerhalb von 1 Tag' },

  lb_problem: { en: 'The Problem', de: 'Das Problem' },
  lb_who: { en: 'Who We Are', de: 'Wer wir sind' },
  lb_method: { en: 'Our Method', de: 'Unsere Methode' },
  lb_offer: { en: 'What We Offer', de: 'Was wir bieten' },
  lb_workwith: { en: 'Who We Work With', de: 'Mit wem wir arbeiten' },
  lb_proof: { en: 'Case Studies', de: 'Fallstudien' },
  lb_testi: { en: 'Testimonials', de: 'Kundenstimmen' },
  lb_why: { en: 'Why Symufolk', de: 'Warum Symufolk' },
  lb_process: { en: 'The Process', de: 'Der Ablauf' },
  lb_pricing: { en: 'Pricing', de: 'Preise' },
  lb_faq: { en: 'FAQ', de: 'FAQ' },

  prob_h2: {
    en: 'Why great local businesses stay <span style="color:#FFFFFF;">invisible</span>',
    de: 'Warum großartige lokale Unternehmen <span style="color:#FFFFFF;">unsichtbar</span> bleiben',
  },
  prob_p: {
    en: 'Most local businesses face the same three expensive problems, and each one has a direct cost in euros.',
    de: 'Die meisten lokalen Unternehmen haben dieselben drei teuren Probleme, und jedes kostet bares Geld.',
  },
  prob_quote: {
    en: 'The problem isn\'t your effort. It\'s that no one is responsible for the full result.<br><span style="color:#FFFFFF;">We are.</span>',
    de: 'Das Problem ist nicht Ihr Einsatz. Es ist, dass niemand für das Gesamtergebnis verantwortlich ist.<br><span style="color:#FFFFFF;">Wir sind es.</span>',
  },
  p1t: { en: 'No Time', de: 'Keine Zeit' },
  p1d: {
    en: 'You\'re too busy running the business to figure out marketing.',
    de: 'Sie sind zu beschäftigt mit dem Tagesgeschäft, um sich um Marketing zu kümmern.',
  },
  p2t: { en: 'Burned Budget', de: 'Verbranntes Budget' },
  p2d: {
    en: 'Paying agencies for "likes" instead of actual sales and bookings.',
    de: 'Agenturen zahlen für „Likes" statt für echte Verkäufe und Buchungen.',
  },
  p3t: { en: 'Portal Taxes', de: 'Portal-Gebühren' },
  p3d: {
    en: 'Losing 15–25% of every booking to third-party portals.',
    de: '15–25% jeder Buchung gehen an Drittanbieter-Portale verloren.',
  },

  ab_team: { en: 'senior, accountable team', de: 'erfahrenes, verantwortliches Team' },
  ab_sub: {
    en: 'Replacing fragmented freelancers &amp; bloated agency fees.',
    de: 'Ersetzt einzelne Freelancer &amp; aufgeblähte Agenturkosten.',
  },
  ab_h2: {
    en: 'Built to help local German businesses <span style="color:#00E6A3;">outsmart the big chains</span>.',
    de: 'Gemacht, um lokalen deutschen Unternehmen zu helfen, <span style="color:#00E6A3;">die großen Ketten zu überflügeln</span>.',
  },
  ab_p: {
    en: 'We\'re a specialized digital marketing agency on a simple mission. We replace fragmented freelancers and bloated agency fees with one senior, accountable team that brings top-tier expertise with low overhead, focused entirely on your <strong style="color:#FFFFFF;font-weight:700;">real growth, not vanity metrics</strong>.',
    de: 'Wir sind eine spezialisierte Digital-Marketing-Agentur mit einer einfachen Mission. Wir ersetzen einzelne Freelancer und aufgeblähte Agenturkosten durch ein erfahrenes, verantwortliches Team mit Spitzen-Expertise bei geringem Overhead, voll fokussiert auf Ihr <strong style="color:#FFFFFF;font-weight:700;">echtes Wachstum, nicht auf Vanity-Metriken</strong>.',
  },

  sol_h2: { en: 'The 3-Step Local Growth Engine', de: 'Der 3-Stufen-Motor für lokales Wachstum' },
  sol_p: {
    en: 'Every euro you spend drives one of these three steps. If a service doesn\'t help one of them, we won\'t sell it to you.',
    de: 'Jeder Euro, den Sie ausgeben, treibt einen dieser drei Schritte an. Wenn eine Leistung keinem davon dient, verkaufen wir sie Ihnen nicht.',
  },
  s1t: { en: 'FOUND', de: 'GEFUNDEN' },
  s1d: {
    en: 'Show up when customers search. <strong style="color:#00E6A3;">We capture the demand.</strong>',
    de: 'Erscheinen, wenn Kunden suchen. <strong style="color:#00E6A3;">Wir fangen die Nachfrage ein.</strong>',
  },
  s2t: { en: 'TRUSTED', de: 'VERTRAUT' },
  s2d: {
    en: 'Turn visitors into buyers. <strong style="color:#00E6A3;">We convert the demand.</strong>',
    de: 'Besucher in Käufer verwandeln. <strong style="color:#00E6A3;">Wir wandeln die Nachfrage um.</strong>',
  },
  s3t: { en: 'RETAINED', de: 'GEBUNDEN' },
  s3d: {
    en: 'Turn buyers into regulars. <strong style="color:#00E6A3;">We maximize lifetime value.</strong>',
    de: 'Käufer zu Stammkunden machen. <strong style="color:#00E6A3;">Wir maximieren den Lifetime-Wert.</strong>',
  },

  serv_h2: { en: 'Services we offer', de: 'Unsere Leistungen' },
  serv_p: {
    en: 'Every service is designed to feed the 3-Step Growth Engine, so nothing doesn\'t move the needle.',
    de: 'Jede Leistung befeuert den 3-Stufen-Wachstumsmotor, nichts, was nicht wirkt.',
  },
  sv1t: { en: 'SEO', de: 'SEO' },
  sv1d: {
    en: 'Top spots on Google Search and Maps so customers find you first.',
    de: 'Top-Platzierungen bei Google-Suche und Maps, damit Kunden Sie zuerst finden.',
  },
  sv2t: { en: 'Social Media Marketing', de: 'Social-Media-Marketing' },
  sv2d: {
    en: '12–20 high-quality posts per month. An engaged audience, not empty likes.',
    de: '12–20 hochwertige Beiträge pro Monat. Ein engagiertes Publikum, keine leeren Likes.',
  },
  sv3t: { en: 'Paid Ads', de: 'Bezahlte Anzeigen' },
  sv3d: {
    en: 'Google &amp; Meta ads with clear, measurable ROI. Spend into predictable revenue.',
    de: 'Google- &amp; Meta-Anzeigen mit klarem, messbarem ROI. Ausgaben werden zu planbarem Umsatz.',
  },
  sv4t: { en: 'Content Writing', de: 'Content-Texte' },
  sv4d: {
    en: 'Words that rank on Google and actually sell, for your site and blogs.',
    de: 'Texte, die bei Google ranken und wirklich verkaufen, für Website und Blog.',
  },
  sv5t: { en: 'Website Development', de: 'Website-Entwicklung' },
  sv5d: {
    en: 'Fast, mobile-optimized sites built to convert visitors into buyers.',
    de: 'Schnelle, mobil-optimierte Websites, die Besucher in Käufer verwandeln.',
  },
  sv6t: { en: 'UI/UX Design', de: 'UI/UX-Design' },
  sv6d: {
    en: 'Simple, intuitive designs that remove friction from buying.',
    de: 'Einfache, intuitive Designs, die Reibung beim Kauf beseitigen.',
  },
  sv7t: { en: 'Graphic Design', de: 'Grafikdesign' },
  sv7d: {
    en: 'Eye-catching visuals tailored for ads, social, and print.',
    de: 'Auffällige Visuals, zugeschnitten auf Anzeigen, Social Media und Print.',
  },
  sv8t: { en: 'Video Editing', de: 'Videobearbeitung' },
  sv8d: {
    en: 'Short, engaging video that captures attention and drives action.',
    de: 'Kurze, fesselnde Videos, die Aufmerksamkeit erregen und zum Handeln bewegen.',
  },
  sv9t: { en: 'Branding', de: 'Branding' },
  sv9d: {
    en: 'A memorable look and voice that makes you stand out locally.',
    de: 'Ein einprägsamer Look und Ton, mit dem Sie lokal herausstechen.',
  },
  sv10t: { en: 'Email Marketing', de: 'E-Mail-Marketing' },
  sv10d: {
    en: 'Automated, DSGVO-compliant flows that drive repeat sales.',
    de: 'Automatisierte, DSGVO-konforme Abläufe, die Wiederkäufe fördern.',
  },
  sv11t: { en: 'Automation', de: 'Automatisierung' },
  sv11d: {
    en: 'Smart workflows that save time and keep leads moving.',
    de: 'Smarte Workflows, die Zeit sparen und Leads in Bewegung halten.',
  },
  sv12t: { en: 'Loyalty Offers', de: 'Treueangebote' },
  sv12d: {
    en: 'Rewards that turn happy one-time buyers into regulars.',
    de: 'Prämien, die zufriedene Einmalkäufer zu Stammkunden machen.',
  },

  work_p: {
    en: 'We help small businesses across Germany win more customers than the big chains.',
    de: 'Wir helfen kleinen Unternehmen in ganz Deutschland, mehr Kunden zu gewinnen als die großen Ketten.',
  },
  nHotels: { en: 'Hotels &amp; Hospitality', de: 'Hotels &amp; Gastgewerbe' },
  nDental: { en: 'Dental &amp; Medical', de: 'Zahn &amp; Medizin' },
  nFashion: { en: 'Fashion &amp; Shoe Brands', de: 'Mode &amp; Schuhmarken' },
  nRetail: { en: 'Retail &amp; Local Shops', de: 'Einzelhandel &amp; Läden' },
  nPet: { en: 'Pet Shops &amp; Services', de: 'Tierbedarf &amp; -services' },
  nRest: { en: 'Restaurants &amp; Cafés', de: 'Restaurants &amp; Cafés' },
  nBeauty: { en: 'Beauty &amp; Wellness', de: 'Beauty &amp; Wellness' },
  nTrades: { en: 'Trades &amp; Home Services', de: 'Handwerk &amp; Hausdienste' },

  cases_h2: {
    en: 'Real data. Real growth for German businesses.',
    de: 'Echte Daten. Echtes Wachstum für deutsche Unternehmen.',
  },
  c_start_lbl: { en: 'Starting point', de: 'Ausgangslage' },
  c1label: { en: 'Hotel · Munich · 25 rooms', de: 'Hotel · München · 25 Zimmer' },
  c1time: { en: '4 months', de: '4 Monate' },
  c1metric: { en: 'Direct bookings', de: 'Direktbuchungen' },
  c1start: {
    en: '80% of bookings came through Booking.com at 15% commission.',
    de: '80% der Buchungen kamen über Booking.com bei 15% Provision.',
  },
  c1r1: { en: 'Direct bookings / mo', de: 'Direktbuchungen / Mon.' },
  c1r2: { en: 'Commission saved / yr', de: 'Ersparnis Provision / Jahr' },
  c1r3: { en: 'Guest email list', de: 'Gäste-E-Mail-Liste' },
  c2label: { en: 'Dental Clinic · Cologne', de: 'Zahnklinik · Köln' },
  c2time: { en: '90 days', de: '90 Tage' },
  c2metric: { en: 'New patient inquiries', de: 'Neue Patientenanfragen' },
  c2start: {
    en: 'Position #9 in Google Maps — invisible to most searchers.',
    de: 'Position #9 in Google Maps — für die meisten Suchenden unsichtbar.',
  },
  c2r1: { en: 'New inquiries / mo', de: 'Neue Anfragen / Mon.' },
  c2r2: { en: 'Cost per appointment', de: 'Kosten pro Termin' },
  c2r3: { en: 'Google Maps rank', de: 'Google-Maps-Rang' },
  c3label: { en: 'Pet Supply · Leipzig', de: 'Tierbedarf · Leipzig' },
  c3time: { en: '6 months', de: '6 Monate' },
  c3metric: { en: 'Online revenue', de: 'Online-Umsatz' },
  c3start: {
    en: 'Revenue stuck at €3,100/mo with ROAS of just 2.1.',
    de: 'Umsatz stagnierte bei €3.100/Mon. mit einem ROAS von nur 2,1.',
  },
  c3r1: { en: 'Online revenue / mo', de: 'Online-Umsatz / Mon.' },
  c3r2: { en: 'Customer email list', de: 'Kunden-E-Mail-Liste' },
  c3r3: { en: 'Return on ad spend', de: 'Return on Ad Spend' },

  testi_h2: { en: 'Trusted by local business leaders', de: 'Vertraut von lokalen Unternehmern' },
  t1q: {
    en: '"They stopped us from bleeding money to booking portals."',
    de: '"Sie haben verhindert, dass wir Geld an Buchungsportale verlieren."',
  },
  t1p: {
    en: 'We were losing thousands to Booking.com commissions every year. Symufolk built us a direct-booking machine, within four months our direct bookings jumped from 5 to 22 a month, saving over €4,000 in portal fees. They care about our bottom line, not just making things look pretty.',
    de: 'Wir verloren jährlich Tausende an Booking.com-Provisionen. Symufolk baute uns eine Direktbuchungs-Maschine, innerhalb von vier Monaten stiegen unsere Direktbuchungen von 5 auf 22 pro Monat und wir sparten über €4.000 an Portalgebühren. Ihnen geht es um unser Ergebnis, nicht nur um schöne Optik.',
  },
  t1a: {
    en: 'General Manager · 25-Room Boutique Hotel, Munich',
    de: 'General Manager · Boutique-Hotel mit 25 Zimmern, München',
  },
  t2q: {
    en: '"100% DSGVO-compliant and highly effective."',
    de: '"100% DSGVO-konform und äußerst effektiv."',
  },
  t2p: {
    en: 'In the medical field, data privacy is everything. Symufolk\'s strict DSGVO compliance gave me total peace of mind, and they delivered. They moved us from page 2 to the top 3 on Google Maps, and cost per new patient dropped from €48 to just €21. Professional, zero friction.',
    de: 'Im medizinischen Bereich ist Datenschutz alles. Symufolks strikte DSGVO-Konformität gab mir volle Sicherheit, und sie lieferten. Sie brachten uns von Seite 2 in die Top 3 bei Google Maps, und die Kosten pro Neupatient sanken von €48 auf nur €21. Professionell, ohne Reibung.',
  },
  t2a: { en: 'Lead Dentist · Private Clinic, Cologne', de: 'Leitende Zahnärztin · Privatklinik, Köln' },
  t3q: {
    en: '"They care about our revenue, not just \'likes\'."',
    de: '"Ihnen geht es um unseren Umsatz, nicht nur um ‚Likes\'."',
  },
  t3p: {
    en: 'Previous agencies just chased empty likes. Symufolk asked one question: "How much revenue do you want?" They cleaned up our web shop, fixed our ad targeting, and built an email list of 480 customers from scratch. Online revenue jumped 84% and our ad spend is finally profitable.',
    de: 'Frühere Agenturen jagten nur leeren Likes hinterher. Symufolk stellte eine Frage: „Wie viel Umsatz wollen Sie?" Sie räumten unseren Webshop auf, korrigierten das Anzeigen-Targeting und bauten eine E-Mail-Liste mit 480 Kunden von Grund auf. Der Online-Umsatz stieg um 84% und die Werbeausgaben sind endlich profitabel.',
  },
  t3a: { en: 'Owner · Pet Supply &amp; Retail, Leipzig', de: 'Inhaber · Tierbedarf &amp; Einzelhandel, Leipzig' },
  t4q: { en: '"No jargon, just results."', de: '"Kein Fachjargon, nur Ergebnisse."' },
  t4p: {
    en: 'The 30-day cancellation policy and 1-day response guarantee aren\'t just marketing. They reply within hours, and the monthly reports take exactly 5 minutes to read. No confusing agency jargon, just clear data on what every euro earned.',
    de: 'Die 30-Tage-Kündigungsfrist und die 1-Tag-Antwortgarantie sind kein Marketing-Gerede. Sie antworten binnen Stunden, und die Monatsberichte liest man in genau 5 Minuten. Kein verwirrender Agentur-Jargon, nur klare Daten dazu, was jeder Euro gebracht hat.',
  },
  t4a: { en: 'Operations Manager · Local Home Services, Berlin', de: 'Betriebsleiter · Lokale Hausdienste, Berlin' },

  guar_h2: {
    en: 'Built for the German market. <span style="color:#00E6A3;">Zero risk.</span>',
    de: 'Gemacht für den deutschen Markt. <span style="color:#00E6A3;">Null Risiko.</span>',
  },
  guar_p: {
    en: 'A young agency with senior experts and low overhead. Every point below is written directly into your contract.',
    de: 'Eine junge Agentur mit erfahrenen Experten und geringem Overhead. Jeder Punkt unten steht direkt in Ihrem Vertrag.',
  },
  g1t: { en: '100% DSGVO Compliant', de: '100% DSGVO-konform' },
  g1d: {
    en: 'Strict data protection for you and your customers.',
    de: 'Strenger Datenschutz für Sie und Ihre Kunden.',
  },
  g2t: { en: 'One Team, One Invoice', de: 'Ein Team, eine Rechnung' },
  g2d: {
    en: 'Replace 3–5 fragmented vendors with one accountable partner.',
    de: 'Ersetzen Sie 3–5 einzelne Dienstleister durch einen verantwortlichen Partner.',
  },
  g3t: { en: 'Senior Specialists Only', de: 'Nur erfahrene Spezialisten' },
  g3d: {
    en: 'No juniors learning on your dime. Professionals handle your work.',
    de: 'Keine Junioren, die auf Ihre Kosten lernen. Profis übernehmen Ihre Arbeit.',
  },
  g4t: { en: '30-Day Flexibility', de: '30-Tage-Flexibilität' },
  g4d: {
    en: 'Cancel your monthly plan with just 30 days\' notice. No lock-in.',
    de: 'Kündigen Sie Ihren Monatsplan mit nur 30 Tagen Frist. Keine Bindung.',
  },
  g5t: { en: 'Rapid Response', de: 'Schnelle Reaktion' },
  g5d: {
    en: 'Guaranteed answers to your queries within 1 working day.',
    de: 'Garantierte Antworten auf Ihre Anfragen innerhalb von 1 Werktag.',
  },

  proc_h2: {
    en: 'From free audit to launch in 4 weeks',
    de: 'Vom kostenlosen Audit zum Start in 4 Wochen',
  },
  pw1: { en: 'Week 1', de: 'Woche 1' },
  pt1: { en: 'Free Audit', de: 'Kostenloses Audit' },
  pd1: {
    en: 'We review your current marketing and your competitors.',
    de: 'Wir prüfen Ihr aktuelles Marketing und Ihre Wettbewerber.',
  },
  pw2: { en: 'Week 2', de: 'Woche 2' },
  pt2: { en: 'Clear Plan', de: 'Klarer Plan' },
  pd2: {
    en: 'A roadmap: channels, budget, and expected ROI.',
    de: 'Ein Fahrplan: Kanäle, Budget und erwarteter ROI.',
  },
  pw3: { en: 'Weeks 3–4', de: 'Woche 3–4' },
  pt3: { en: 'Launch', de: 'Start' },
  pd3: {
    en: 'Campaigns, content, and tools go live. Fully managed by us.',
    de: 'Kampagnen, Content und Tools gehen live. Komplett von uns betreut.',
  },
  pw4: { en: 'Ongoing', de: 'Laufend' },
  pt4: { en: 'Report &amp; Improve', de: 'Berichten &amp; Verbessern' },
  pd4: {
    en: 'A simple monthly report showing what every euro earned.',
    de: 'Ein einfacher Monatsbericht, der zeigt, was jeder Euro gebracht hat.',
  },

  price_h2: {
    en: 'Transparent pricing. No hidden fees.',
    de: 'Transparente Preise. Keine versteckten Kosten.',
  },
  pr1: { en: 'Basic', de: 'Basic' },
  pr1s: { en: 'Build your digital presence', de: 'Digitale Präsenz aufbauen' },
  pr2: { en: 'Advanced', de: 'Advanced' },
  pr2s: { en: 'Accelerate your growth', de: 'Wachstum beschleunigen' },
  pr3: { en: 'Premium', de: 'Premium' },
  pr3s: { en: 'Complete marketing management', de: 'Komplettes Marketing-Management' },
  permonth: { en: '/month', de: '/Monat' },
  popular: { en: 'Most Popular', de: 'Beliebteste' },
  getstarted: { en: 'Get Started', de: 'Loslegen' },
  pr2plus: { en: 'Everything in Basic, plus', de: 'Alles aus Basic, plus' },
  pr3plus: { en: 'Everything in Advanced, plus', de: 'Alles aus Advanced, plus' },
  oneoff_t: {
    en: 'One-off projects <span style="font-weight:500;font-size:15px;color:#9A9A9A;font-family:\'Hanken Grotesk\',sans-serif;">· fixed scope, fixed price.</span>',
    de: 'Einzelprojekte <span style="font-weight:500;font-size:15px;color:#9A9A9A;font-family:\'Hanken Grotesk\',sans-serif;">· fester Umfang, fester Preis.</span>',
  },
  oneoff_web: {
    en: 'Websites from <strong style="color:#00E6A3;">€1,200</strong>',
    de: 'Websites ab <strong style="color:#00E6A3;">€1.200</strong>',
  },
  oneoff_seo: {
    en: 'SEO Setup from <strong style="color:#00E6A3;">€400</strong>',
    de: 'SEO-Setup ab <strong style="color:#00E6A3;">€400</strong>',
  },
  oneoff_lp: {
    en: 'Landing Pages from <strong style="color:#00E6A3;">€350</strong>',
    de: 'Landingpages ab <strong style="color:#00E6A3;">€350</strong>',
  },

  faq_h2: { en: 'Questions, answered', de: 'Fragen, beantwortet' },
  fq1: {
    en: 'Do I have to sign a long-term contract?',
    de: 'Muss ich einen langfristigen Vertrag unterschreiben?',
  },
  fa1: {
    en: 'No. We believe in earning your business every month. You can cancel your monthly plan with just 30 days\' notice.',
    de: 'Nein. Wir möchten Ihr Vertrauen jeden Monat neu verdienen. Sie können Ihren Monatsplan mit nur 30 Tagen Frist kündigen.',
  },
  fq2: {
    en: 'Is my data handled according to DSGVO (GDPR)?',
    de: 'Werden meine Daten gemäß DSGVO (GDPR) behandelt?',
  },
  fa2: {
    en: 'Absolutely. 100% DSGVO compliance is a core guarantee. All data handling, email automations, and tracking are strictly compliant with German and EU laws.',
    de: 'Absolut. 100% DSGVO-Konformität ist eine Kerngarantie. Alle Datenverarbeitung, E-Mail-Automationen und Tracking sind streng konform mit deutschem und EU-Recht.',
  },
  fq3: {
    en: 'Who will actually be working on my account?',
    de: 'Wer arbeitet tatsächlich an meinem Account?',
  },
  fa3: {
    en: 'Senior specialists only. We do not hand your account to juniors or interns. You get experienced professionals handling your work.',
    de: 'Nur erfahrene Spezialisten. Wir geben Ihren Account nicht an Junioren oder Praktikanten. Sie erhalten erfahrene Profis.',
  },
  fq4: { en: 'How do you measure success?', de: 'Wie messen Sie Erfolg?' },
  fa4: {
    en: 'We focus on business growth, not vanity metrics. You\'ll receive simple, readable monthly reports showing exactly how our work impacted your sales, bookings, and ROI.',
    de: 'Wir konzentrieren uns auf Unternehmenswachstum, nicht auf Vanity-Metriken. Sie erhalten einfache, verständliche Monatsberichte, die genau zeigen, wie unsere Arbeit Ihre Verkäufe, Buchungen und ROI beeinflusst hat.',
  },
  fq5: {
    en: 'What if I only need a website, not monthly marketing?',
    de: 'Was, wenn ich nur eine Website brauche, kein monatliches Marketing?',
  },
  fa5: {
    en: 'We offer fixed-scope project pricing with no contracts. You can hire us for a one-off website, branding package, or SEO setup.',
    de: 'Wir bieten Festpreis-Projekte ohne Vertrag. Sie können uns für eine einmalige Website, ein Branding-Paket oder ein SEO-Setup beauftragen.',
  },

  cta_h2: {
    en: 'Will they find you,<br>or your <span style="color:#00E6A3;">competitor</span>?',
    de: 'Findet man Sie<br>oder Ihren <span style="color:#00E6A3;">Wettbewerber</span>?',
  },
  cta_p: {
    en: 'Right now, someone nearby is searching for exactly what you do. Let\'s make sure they find you.',
    de: 'Gerade jetzt sucht jemand in Ihrer Nähe genau nach dem, was Sie tun. Sorgen wir dafür, dass er Sie findet.',
  },
  cta_btn: {
    en: 'Book my free 30-minute audit <span style="font-size:20px;">→</span>',
    de: 'Mein kostenloses 30-Minuten-Audit buchen <span style="font-size:20px;">&rarr;</span>',
  },
  cta_email: {
    en: 'Or email us directly at <a href="mailto:info@symufolk.com" style="color:#00E6A3;font-weight:700;">info@symufolk.com</a>',
    de: 'Oder schreiben Sie uns direkt an <a href="mailto:info@symufolk.com" style="color:#00E6A3;font-weight:700;">info@symufolk.com</a>',
  },
  cta_toast: {
    en: "Opening your email app — we've also copied info@symufolk.com to your clipboard.",
    de: 'Ihre E-Mail-App wird geöffnet — info@symufolk.com wurde außerdem in die Zwischenablage kopiert.',
  },

  ft_tag: {
    en: 'Helping local German businesses become their city\'s obvious choice.',
    de: 'Wir helfen lokalen deutschen Unternehmen, die klare erste Wahl ihrer Stadt zu werden.',
  },
  ft_quick: { en: 'Quick Links', de: 'Schnelllinks' },
  ft_legal: { en: 'Legal &amp; Contact', de: 'Rechtliches &amp; Kontakt' },
  ft_about: { en: 'About', de: 'Über uns' },
  ft_services: { en: 'Services', de: 'Leistungen' },
  ft_cases: { en: 'Case Studies', de: 'Fallstudien' },
  ft_pricing: { en: 'Pricing', de: 'Preise' },
  ft_contact: { en: 'Contact', de: 'Kontakt' },
  ft_copy: { en: '© 2026 Symufolk. All Rights Reserved.', de: '© 2026 Symufolk. Alle Rechte vorbehalten.' },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('symufolk_lang') || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('symufolk_lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
  }, [lang])

  const t = (key) => {
    const entry = translations[key]
    if (!entry) return key
    return entry[lang] ?? entry.en
  }

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

/* Renders a translated string as trusted inline HTML.
   `as` sets the wrapper tag; remaining props (style, className) pass through. */
export function T({ k, as: Tag = 'span', ...rest }) {
  const { t } = useLang()
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: t(k) }} />
}

/* Same as <T>, but wrapped in a scroll <Reveal> while keeping a real semantic
   tag (`as`, e.g. 'h1'/'h2'/'p') for accessibility and SEO. */
export function TReveal({ k, as = 'div', delay = 0, className, style, ...rest }) {
  const { t } = useLang()
  return (
    <Reveal
      as={as}
      delay={delay}
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: t(k) }}
      {...rest}
    />
  )
}
