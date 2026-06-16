import { useEffect, useRef } from "react";
import { PocketDragonLogo } from "./Logo";
import { DownloadButtons } from "./DownloadButtons";

const SCREEN_IDS = ["practice", "salon", "match", "lobby", "league"] as const;

export function Hero() {
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const screens = document.querySelectorAll<HTMLElement>("#orbit-screen .app-screen");
    if (!screens.length) return;

    const switchTo = (screenId: string) => {
      screens.forEach((s) => {
        const isTarget = s.id === `screen-${screenId}`;
        s.style.opacity = isTarget ? "1" : "0";
        s.style.pointerEvents = isTarget ? "auto" : "none";
        s.classList.toggle("active", isTarget);
      });
    };

    const startAuto = () => {
      autoTimer.current = setInterval(() => {
        currentIndex.current = (currentIndex.current + 1) % SCREEN_IDS.length;
        switchTo(SCREEN_IDS[currentIndex.current]);
      }, 6000);
    };

    startAuto();

    const phoneWrap = document.getElementById("orbit-phone-wrap");
    if (phoneWrap) {
      phoneWrap.addEventListener("mouseenter", () => {
        if (autoTimer.current) clearInterval(autoTimer.current);
      });
      phoneWrap.addEventListener("mouseleave", startAuto);
    }

    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pt-3 pb-10 sm:px-8 md:pt-4 md:pb-16 lg:grid-cols-2 lg:gap-10">
        {/* Left */}
        <div className="flex flex-col items-start gap-5">
          <PocketDragonLogo size="hero" className="-ml-1" animate />

          <h1 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-2xl md:text-[1.65rem]">
            Mahjong on <span style={{ color: "var(--rust)" }}>your time</span>,{" "}
            <span style={{ color: "var(--rust)" }}>anywhere</span> you are!
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base text-justify">
            Practice, play, and compete your way to the top. Enjoy real-time Traditional
            Mahjong action at your fingertips — built for serious players who value the
            craft of the classic game.
          </p>

          <div id="download" className="w-full max-w-md pt-2">
            <DownloadButtons align="start" showDivider />
          </div>
        </div>

        {/* Right — interactive phone mockup */}
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
                      <div className="seat-avatar" style={{ background: "#1a3d28" }}>龍</div>
                      <div className="seat-info">
                        <span className="seat-name">DragonMaster</span>
                        <span className="seat-role">HOST</span>
                      </div>
                      <span className="seat-badge host">HOST</span>
                    </div>
                    <div className="salon-seat occupied">
                      <div className="seat-avatar" style={{ background: "#7a3818" }}>虎</div>
                      <div className="seat-info">
                        <span className="seat-name">TigerClaw99</span>
                        <span className="seat-role">PLAYER</span>
                      </div>
                      <span className="seat-badge player">P2</span>
                    </div>
                    <div className="salon-seat empty">
                      <div className="seat-avatar empty-avatar">？</div>
                      <div className="seat-info">
                        <span className="seat-name">Waiting...</span>
                        <span className="seat-role">OPEN</span>
                      </div>
                    </div>
                    <div className="salon-seat empty">
                      <div className="seat-avatar empty-avatar">？</div>
                      <div className="seat-info">
                        <span className="seat-name">Waiting...</span>
                        <span className="seat-role">OPEN</span>
                      </div>
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
                    <div className="found-player">
                      <span className="fp-flag">🇨🇳</span>
                      <span className="fp-name">Shanghai_Pro</span>
                      <span className="fp-rating">★ 2,340</span>
                    </div>
                    <div className="found-player">
                      <span className="fp-flag">🇸🇬</span>
                      <span className="fp-name">LionCity88</span>
                      <span className="fp-rating">★ 1,890</span>
                    </div>
                    <div className="found-player fp-you">
                      <span className="fp-flag">YOU</span>
                      <span className="fp-name">—</span>
                      <span className="fp-rating">★ —</span>
                    </div>
                    <div className="found-player fp-waiting">
                      <span className="fp-flag">⏳</span>
                      <span className="fp-name">Searching...</span>
                      <span className="fp-rating"></span>
                    </div>
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
                    <div className="match-crit-row">
                      <span className="crit-icon">🎯</span>
                      <span className="crit-text">Skill range ±150 pts</span>
                      <span className="crit-ok">✓</span>
                    </div>
                    <div className="match-crit-row">
                      <span className="crit-icon">🌏</span>
                      <span className="crit-text">Low ping servers</span>
                      <span className="crit-ok">✓</span>
                    </div>
                    <div className="match-crit-row">
                      <span className="crit-icon">⏱</span>
                      <span className="crit-text">Est. wait: &lt;10s</span>
                      <span className="crit-ok">⚡</span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="orbit-phone-home"></div>
            </div>
          </div>
          <div className="orbit-phone-reflection"></div>
          <div className="orbit-phone-glow"></div>
        </div>
      </div>
    </section>
  );
}
