import { useEffect } from "react";
import { SectionEyebrow } from "./SectionEyebrow";

const SCREEN_IDS = ["practice", "salon", "match", "lobby", "league"] as const;

export function Playground() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".orbit-feature-card");
    const screens = document.querySelectorAll<HTMLElement>("#orbit-screen .app-screen");
    if (!cards.length || !screens.length) return;

    let autoTimer: ReturnType<typeof setInterval> | null = null;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;
    let currentIndex = 0;
    let isPaused = false;

    const stopAuto = () => {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
      if (resumeTimer) { clearTimeout(resumeTimer); resumeTimer = null; }
    };

    const switchTo = (screenId: string) => {
      cards.forEach((c) =>
        c.classList.toggle("active", c.dataset.screen === screenId)
      );
      screens.forEach((s) => {
        const isTarget = s.id === `screen-${screenId}`;
        s.style.opacity = isTarget ? "1" : "0";
        s.style.pointerEvents = isTarget ? "auto" : "none";
        s.classList.toggle("active", isTarget);
      });
    };

    const startAuto = () => {
      stopAuto();
      autoTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % SCREEN_IDS.length;
        switchTo(SCREEN_IDS[currentIndex]);
      }, 5000);
    };

    // Delay initial auto-rotate by 2s so page can settle after load
    resumeTimer = setTimeout(startAuto, 2000);

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        stopAuto();
        const screenId = card.dataset.screen ?? "";
        currentIndex = SCREEN_IDS.indexOf(screenId as typeof SCREEN_IDS[number]);
        setTimeout(() => switchTo(screenId), 100);
        // Resume auto-rotate after 10s of inactivity
        resumeTimer = setTimeout(startAuto, 10000);
      });
      card.addEventListener("mouseenter", () => {
        isPaused = true;
        stopAuto();
      });
      card.addEventListener("mouseleave", () => {
        isPaused = false;
        // Small delay before resuming so quick mouse passes don't retrigger immediately
        resumeTimer = setTimeout(() => {
          if (!isPaused) startAuto();
        }, 800);
      });
    });

    return () => {
      stopAuto();
    };
  }, []);

  return (
    <section className="playground-section" id="playground">
      <div className="orbit-container">

        {/* Section Header */}
        <div className="orbit-header">

                  <div className="flex flex-col items-center gap-3 text-center mb-2">
                    <SectionEyebrow>INSIDE THE APP</SectionEyebrow>
                 
                  </div>
          {/* <span className="section-overline">INSIDE THE APP</span> */}
          <h2 className="orbit-title">
            THE COMPLETE MAHJONG <span className="text-rust">PLAYGROUND</span>
          </h2>
          <p className="orbit-subtitle">
            Every mode, built for serious players. Tap a feature to see it live.
          </p>
        </div>

        {/* Orbit Layout */}
        <div className="orbit-stage">

          {/* LEFT FEATURES */}
          <div className="orbit-features orbit-left">

            <div className="orbit-feature-card active" id="ofc-practice" data-screen="practice">
              <div className="ofc-connector ofc-connector-right"></div>
              <div className="ofc-text">
                <span className="ofc-overline">SOLO PLAY</span>
                <h3 className="ofc-title">Practice Mode with Bots</h3>
                <p className="ofc-desc">Sharpen your skills with endless practice rounds against intelligent AI.</p>
                <div className="ofc-tags">
                  <span className="ofc-tag">EASY</span>
                  <span className="ofc-tag">MEDIUM</span>
                  <span className="ofc-tag">HARD</span>
                </div>
              </div>
            </div>

            <div className="orbit-feature-card" id="ofc-salon" data-screen="salon">
              <div className="ofc-connector ofc-connector-right"></div>
              <div className="ofc-text">
                <span className="ofc-overline">SOCIAL</span>
                <h3 className="ofc-title">Private Tables with Friends</h3>
                <p className="ofc-desc">Round up your crew and deal in. Your table, your rules.</p>
                <div className="ofc-tags">
                  <span className="ofc-tag">INVITE LINK</span>
                  <span className="ofc-tag">UP TO 4</span>
                </div>
              </div>
            </div>

            <div className="orbit-feature-card" id="ofc-match" data-screen="match">
              <div className="ofc-connector ofc-connector-right"></div>
              <div className="ofc-text">
                <span className="ofc-overline">INTELLIGENCE</span>
                <h3 className="ofc-title">Smart Matchmaking</h3>
                <p className="ofc-desc">The right table, right away. Skill-based matching finds your perfect game in seconds.</p>
                <div className="ofc-tags">
                  <span className="ofc-tag">SKILL-BASED</span>
                  <span className="ofc-tag">INSTANT</span>
                </div>
              </div>
            </div>

          </div>

          {/* CENTER: Phone Mockup */}
          <div className="orbit-phone-wrap" id="orbit-phone-wrap">
            <div className="orbit-phone-device">
              <div className="orbit-phone-inner">
                <div className="orbit-phone-speaker"></div>
                <div className="orbit-phone-camera"></div>
                <div className="orbit-phone-screen" id="orbit-screen">

                  {/* SCREEN: Practice Mode */}
                  <div className="app-screen screen-practice active" id="screen-practice">
                    <div className="app-statusbar">
                      <span className="app-time">9:41</span>
                      <span className="app-signal">●●●</span>
                    </div>
                    <div className="app-topbar">
                      <span className="app-back">←</span>
                      <span className="app-heading">SOLO PRACTICE</span>
                      <span className="app-icon-right">⚙</span>
                    </div>
                    <div className="practice-diff-label">SELECT DIFFICULTY</div>
                    <div className="practice-diff-cards">
                      <div className="diff-card diff-easy">
                        <span className="diff-icon">🌱</span>
                        <span className="diff-name">EASY</span>
                        <span className="diff-sub">Beginner AI</span>
                      </div>
                      <div className="diff-card diff-medium active-diff">
                        <span className="diff-icon">⚔️</span>
                        <span className="diff-name">MED</span>
                        <span className="diff-sub">Club Player</span>
                      </div>
                      <div className="diff-card diff-hard">
                        <span className="diff-icon">🐉</span>
                        <span className="diff-name">HARD</span>
                        <span className="diff-sub">Dragon AI</span>
                      </div>
                    </div>
                    <div className="practice-board-preview">
                      <div className="mini-wall">
                        <div className="mini-tile"></div><div className="mini-tile"></div><div className="mini-tile"></div>
                        <div className="mini-tile"></div><div className="mini-tile"></div><div className="mini-tile"></div>
                        <div className="mini-tile"></div><div className="mini-tile"></div>
                      </div>
                      <div className="practice-hand-label">YOUR HAND</div>
                      <div className="practice-hand">
                        <div className="hand-tile t-red">中</div>
                        <div className="hand-tile">一</div>
                        <div className="hand-tile">二</div>
                        <div className="hand-tile t-red">發</div>
                        <div className="hand-tile selected-hand">九</div>
                      </div>
                    </div>
                    <button className="app-cta-btn">START GAME</button>
                  </div>

                  {/* SCREEN: Private Salon */}
                  <div className="app-screen screen-salon" id="screen-salon">
                    <div className="app-statusbar">
                      <span className="app-time">9:41</span>
                      <span className="app-signal">●●●</span>
                    </div>
                    <div className="app-topbar">
                      <span className="app-back">←</span>
                      <span className="app-heading">PRIVATE SALON</span>
                      <span className="app-icon-right">＋</span>
                    </div>
                    <div className="salon-room-code-block">
                      <span className="salon-code-label">ROOM CODE</span>
                      <div className="salon-code">DRAGON-7749</div>
                      <span className="salon-share">⬆ SHARE</span>
                    </div>
                    <div className="salon-seats">
                      <div className="salon-seat occupied">
                        <div className="seat-avatar" style={{ background: "#1e4b33" }}>龍</div>
                        <div className="seat-info"><span className="seat-name">DragonMaster</span><span className="seat-role">HOST</span></div>
                      </div>
                      <div className="salon-seat occupied">
                        <div className="seat-avatar" style={{ background: "#8c4220" }}>虎</div>
                        <div className="seat-info"><span className="seat-name">TigerClaw99</span><span className="seat-role">PLAYER</span></div>
                      </div>
                      <div className="salon-seat empty">
                        <div className="seat-avatar empty-avatar">？</div>
                        <div className="seat-info"><span className="seat-name">Waiting...</span><span className="seat-role">OPEN</span></div>
                      </div>
                      <div className="salon-seat empty">
                        <div className="seat-avatar empty-avatar">？</div>
                        <div className="seat-info"><span className="seat-name">Waiting...</span><span className="seat-role">OPEN</span></div>
                      </div>
                    </div>
                    <button className="app-cta-btn">START WITH BOTS</button>
                  </div>

                  {/* SCREEN: Public Lobby */}
                  <div className="app-screen screen-lobby" id="screen-lobby">
                    <div className="app-statusbar">
                      <span className="app-time">9:41</span>
                      <span className="app-signal">●●●</span>
                    </div>
                    <div className="app-topbar">
                      <span className="app-back">←</span>
                      <span className="app-heading">PUBLIC LOBBY</span>
                      <span className="app-icon-right">◎</span>
                    </div>
                    <div className="lobby-radar-container">
                      <div className="lobby-radar">
                        <div className="radar-ring r1"></div>
                        <div className="radar-ring r2"></div>
                        <div className="radar-ring r3"></div>
                        <div className="radar-sweep"></div>
                        <div className="radar-dot dot-1"></div>
                        <div className="radar-dot dot-2"></div>
                        <div className="radar-dot dot-3"></div>
                      </div>
                      <div className="lobby-status-text">FINDING OPPONENTS</div>
                      <div className="lobby-dots"><span></span><span></span><span></span></div>
                    </div>
                    <div className="lobby-found-players">
                      <div className="found-player"><span className="fp-flag">🇨🇳</span><span className="fp-name">Shanghai_Pro</span><span className="fp-rating">★ 2,340</span></div>
                      <div className="found-player"><span className="fp-flag">🇸🇬</span><span className="fp-name">LionCity88</span><span className="fp-rating">★ 1,890</span></div>
                      <div className="found-player fp-you"><span className="fp-flag">YOU</span><span className="fp-name">—</span><span className="fp-rating">★ —</span></div>
                      <div className="found-player fp-waiting"><span className="fp-flag">⏳</span><span className="fp-name">Searching...</span><span className="fp-rating"></span></div>
                    </div>
                  </div>

                  {/* SCREEN: Ranked League */}
                  <div className="app-screen screen-league" id="screen-league">
                    <div className="app-statusbar">
                      <span className="app-time">9:41</span>
                      <span className="app-signal">●●●</span>
                    </div>
                    <div className="app-topbar">
                      <span className="app-back">←</span>
                      <span className="app-heading">RANKED LEAGUE</span>
                      <span className="app-icon-right">🏆</span>
                    </div>
                    <div className="league-badge-block">
                      <div className="league-badge">🐉</div>
                      <div className="league-rank-name">GRAND MASTER</div>
                      <div className="league-elo">2,748 ELO</div>
                      <div className="league-progress-bar">
                        <div className="league-progress-fill" style={{ width: "78%" }}></div>
                      </div>
                      <div className="league-progress-label">78% TO LEGEND</div>
                    </div>
                    <div className="league-leaderboard">
                      <div className="lb-header"><span>RANK</span><span>PLAYER</span><span>ELO</span></div>
                      <div className="lb-row lb-top1"><span className="lb-pos">🥇</span><span className="lb-name">MasterKong</span><span className="lb-elo">3,212</span></div>
                      <div className="lb-row lb-top2"><span className="lb-pos">🥈</span><span className="lb-name">JadePhoenix</span><span className="lb-elo">3,044</span></div>
                      <div className="lb-row lb-top3"><span className="lb-pos">🥉</span><span className="lb-name">RedDragon88</span><span className="lb-elo">2,981</span></div>
                      <div className="lb-row lb-you"><span className="lb-pos">#4</span><span className="lb-name">YOU</span><span className="lb-elo">2,748</span></div>
                    </div>
                  </div>

                  {/* SCREEN: Smart Matchmaking */}
                  <div className="app-screen screen-match" id="screen-match">
                    <div className="app-statusbar">
                      <span className="app-time">9:41</span>
                      <span className="app-signal">●●●</span>
                    </div>
                    <div className="app-topbar">
                      <span className="app-back">←</span>
                      <span className="app-heading">SMART MATCH</span>
                      <span className="app-icon-right">⚡</span>
                    </div>
                    <div className="match-skill-block">
                      <div className="match-skill-label">YOUR SKILL LEVEL</div>
                      <div className="match-skill-bar">
                        <div className="match-skill-fill" style={{ width: "68%" }}></div>
                      </div>
                      <div className="match-skill-tier">GOLD TIER · 1,842 PTS</div>
                    </div>
                    <div className="lobby-radar-container">
                      <div className="lobby-radar">
                        <div className="radar-ring r1"></div>
                        <div className="radar-ring r2"></div>
                        <div className="radar-ring r3"></div>
                        <div className="radar-sweep"></div>
                        <div className="radar-dot dot-1"></div>
                        <div className="radar-dot dot-2"></div>
                        <div className="radar-dot dot-3"></div>
                      </div>
                      <div className="lobby-status-text">FINDING BEST MATCH</div>
                      <div className="lobby-dots"><span></span><span></span><span></span></div>
                    </div>
                    <div className="match-criteria">
                      <div className="match-crit-row"><span className="crit-icon">🎯</span><span className="crit-text">Skill range ±150 pts</span><span className="crit-ok">✓</span></div>
                      <div className="match-crit-row"><span className="crit-icon">🌏</span><span className="crit-text">Low ping servers</span><span className="crit-ok">✓</span></div>
                      <div className="match-crit-row"><span className="crit-icon">⏱</span><span className="crit-text">Est. wait: &lt;10s</span><span className="crit-ok">⚡</span></div>
                    </div>
                  </div>

                </div>
                <div className="orbit-phone-home"></div>
              </div>
            </div>
            <div className="orbit-phone-reflection"></div>
            <div className="orbit-phone-glow"></div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="orbit-features orbit-right">

            <div className="orbit-feature-card" id="ofc-lobby" data-screen="lobby">
              <div className="ofc-connector ofc-connector-left"></div>
              <div className="ofc-text">
                <span className="ofc-overline">LIVE</span>
                <h3 className="ofc-title">Public Lobby Tables</h3>
                <p className="ofc-desc">The lobby's buzzing — grab a seat and jump straight into a live global game.</p>
                <div className="ofc-tags">
                  <span className="ofc-tag">REAL-TIME</span>
                  <span className="ofc-tag">GLOBAL</span>
                </div>
              </div>
            </div>

            <div className="orbit-feature-card" id="ofc-league" data-screen="league">
              <div className="ofc-connector ofc-connector-left"></div>
              <div className="ofc-text">
                <span className="ofc-overline">COMPETITIVE</span>
                <h3 className="ofc-title">Ranked Points &amp; Tiers</h3>
                <p className="ofc-desc">Earn points, reach new tiers, and unlock exclusive rewards with every win.</p>
                <div className="ofc-tags">
                  <span className="ofc-tag">🐉 GRAND MASTER</span>
                  <span className="ofc-tag">REWARDS</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
