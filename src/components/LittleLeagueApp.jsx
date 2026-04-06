"use client";

import { useState } from "react";

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const C = {
  bg: "#121316",
  surface: "#121316",
  surfaceLow: "#1b1b1e",
  surfaceContainer: "#1f1f22",
  surfaceHigh: "#292a2d",
  surfaceHighest: "#343537",
  surfaceBright: "#38393c",
  surfaceLowest: "#0d0e11",
  primaryContainer: "#001b3d",
  primary: "#b1c7f2",
  onPrimary: "#193053",
  onPrimaryContainer: "#6f84ac",
  secondary: "#4ce346",
  secondaryContainer: "#04b71a",
  onSecondary: "#003a03",
  tertiary: "#ffb3ae",
  onSurface: "#e3e2e5",
  onSurfaceVariant: "#c4c6cf",
  outline: "#8e9099",
  outlineVariant: "#44474e",
  navy: "#001B3D",
};

const styles = {
  app: {
    background: C.bg,
    color: C.onSurface,
    fontFamily: "'Inter', sans-serif",
    minHeight: "100vh",
    maxWidth: 480,
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
  },
  headline: { fontFamily: "'Lexend', sans-serif" },
};

// ─── REUSABLE COMPONENTS ──────────────────────────────────────────────────────

/** Top App Bar */
function TopBar({ rightAction }) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 480,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        background: `${C.navy}e6`,
        backdropFilter: "blur(20px)",
        boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
        zIndex: 100,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          className="material-symbols-outlined"
          style={{ color: C.primary, fontSize: 24 }}
        >
          sports_baseball
        </span>
        <span
          style={{
            ...styles.headline,
            color: C.primary,
            fontWeight: 900,
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          LITTLE LEAGUE
        </span>
      </div>
      {rightAction || (
        <button
          style={{
            background: "none",
            border: "none",
            color: C.primary,
            cursor: "pointer",
            padding: 8,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
      )}
    </header>
  );
}

/** Bottom Navigation */
function BottomNav({ active, onNavigate }) {
  const tabs = [
    { id: "home", icon: "home", label: "Home", fill: true },
    { id: "standings", icon: "leaderboard", label: "Standings" },
    { id: "live", icon: "sensors", label: "Live" },
    { id: "leagues", icon: "map", label: "Leagues" },
  ];
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 480,
        height: 76,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0 8px 8px",
        background: `${C.navy}f5`,
        backdropFilter: "blur(24px)",
        zIndex: 100,
        borderTop: `1px solid ${C.outlineVariant}33`,
        borderRadius: "16px 16px 0 0",
        boxShadow: "0 -8px 24px rgba(0,0,0,0.3)",
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            style={{
              background: isActive ? `${C.secondary}1a` : "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              padding: "6px 14px",
              borderRadius: 12,
              color: isActive ? C.secondary : `${C.primary}80`,
              transition: "all 0.15s ease",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 24,
                fontVariationSettings: isActive && tab.fill ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {tab.icon}
            </span>
            <span
              style={{
                ...styles.headline,
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

/** Section Header */
function SectionHeader({ title, action, actionLabel = "View All" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
      }}
    >
      <span
        style={{
          ...styles.headline,
          fontWeight: 700,
          fontSize: 14,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: C.onSurface,
        }}
      >
        {title}
      </span>
      {action && (
        <button
          onClick={action}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: C.primary,
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontFamily: "'Lexend', sans-serif",
          }}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

/** Live Indicator Pill */
function LivePill({ label = "LIVE" }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "3px 10px",
        background: `${C.secondary}22`,
        border: `1px solid ${C.secondary}44`,
        borderRadius: 999,
        backdropFilter: "blur(8px)",
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: C.secondary,
          animation: "pulse 2s infinite",
        }}
      />
      <span
        style={{
          ...styles.headline,
          fontSize: 9,
          fontWeight: 700,
          color: "#75ff68",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
        }}
      >
        {label}
      </span>
    </span>
  );
}

/** Stat Block */
function StatBlock({ label, value, highlight }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: C.onSurfaceVariant,
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <div
        style={{
          ...styles.headline,
          fontWeight: 900,
          fontSize: 18,
          color: highlight ? C.secondary : C.onSurface,
        }}
      >
        {value}
      </div>
    </div>
  );
}

/** League List Item */
function LeagueItem({ logo, name, subtitle, meta, badge, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 16px",
        borderRadius: 12,
        background: hovered ? C.surfaceHigh : C.surfaceLow,
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 8,
          background: C.surfaceHighest,
          flexShrink: 0,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {logo ? (
          <img
            src={logo}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span className="material-symbols-outlined" style={{ color: C.primary }}>
            sports_baseball
          </span>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              ...styles.headline,
              fontWeight: 700,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: C.onSurface,
            }}
          >
            {name}
          </span>
          {badge && (
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: C.secondary,
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }}
            />
          )}
        </div>
        <div style={{ fontSize: 11, color: C.onSurfaceVariant, marginTop: 2 }}>
          {subtitle}
        </div>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        {meta && (
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              textTransform: "uppercase",
              color: C.outline,
              marginBottom: 4,
            }}
          >
            {meta}
          </div>
        )}
        <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: 20 }}>
          chevron_right
        </span>
      </div>
    </div>
  );
}

/** Game Card (upcoming/schedule) */
function GameCard({ day, date, homeTeam, awayTeam, venue, time, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 16px",
        borderRadius: 10,
        background: hovered ? C.surfaceBright : C.surfaceHigh,
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ textAlign: "center", width: 44, flexShrink: 0 }}>
        <div
          style={{
            ...styles.headline,
            fontSize: 9,
            textTransform: "uppercase",
            color: C.onSurfaceVariant,
          }}
        >
          {day}
        </div>
        <div
          style={{
            ...styles.headline,
            fontSize: 22,
            fontWeight: 900,
            color: C.primary,
            lineHeight: 1,
          }}
        >
          {date}
        </div>
      </div>
      <div
        style={{
          width: 2,
          height: 36,
          background: `${C.outlineVariant}44`,
          borderRadius: 4,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            ...styles.headline,
            fontWeight: 700,
            fontSize: 13,
            color: C.onSurface,
          }}
        >
          {awayTeam} vs {homeTeam}
        </div>
        <div style={{ fontSize: 11, color: C.onSurfaceVariant, marginTop: 2 }}>
          {venue} • {time}
        </div>
      </div>
      <span className="material-symbols-outlined" style={{ color: C.outline, fontSize: 20 }}>
        chevron_right
      </span>
    </div>
  );
}

/** Result Card (final score) */
function ResultCard({ date, winner, loser, winScore, loseScore }) {
  const borderColor = winner ? C.secondary : C.tertiary;
  return (
    <div
      style={{
        padding: "16px 18px",
        borderRadius: 12,
        background: C.surfaceHigh,
        borderLeft: `4px solid ${borderColor}`,
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontSize: 9,
            fontWeight: 700,
            textTransform: "uppercase",
            color: borderColor,
            background: `${borderColor}1a`,
            padding: "3px 8px",
            borderRadius: 4,
          }}
        >
          Final · {date}
        </span>
        <span className="material-symbols-outlined" style={{ color: C.onSurfaceVariant, fontSize: 16 }}>
          chevron_right
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: C.surfaceHighest,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                fontWeight: 700,
                color: C.primary,
              }}
            >
              {winner.slice(0, 2).toUpperCase()}
            </div>
            <span style={{ ...styles.headline, fontWeight: 700, fontSize: 14, color: C.onSurface }}>
              {winner}
            </span>
          </div>
          <span
            style={{ ...styles.headline, fontWeight: 900, fontSize: 22, color: C.secondary }}
          >
            {winScore}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: 0.6,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: C.surfaceHighest,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                fontWeight: 700,
                color: C.onSurfaceVariant,
              }}
            >
              {loser.slice(0, 2).toUpperCase()}
            </div>
            <span style={{ ...styles.headline, fontWeight: 700, fontSize: 14, color: C.onSurface }}>
              {loser}
            </span>
          </div>
          <span
            style={{ ...styles.headline, fontWeight: 900, fontSize: 22, color: C.onSurface }}
          >
            {loseScore}
          </span>
        </div>
      </div>
      <div
        style={{
          marginTop: 12,
          paddingTop: 12,
          borderTop: `1px solid ${C.outlineVariant}1a`,
          fontSize: 9,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: C.onSurfaceVariant,
        }}
      >
        Winner: <span style={{ color: C.secondary }}>{winner}</span>
      </div>
    </div>
  );
}

/** Announcement Card */
function AnnouncementCard({ icon, title, body, date, accent = C.primary }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        padding: "16px 18px",
        background: C.surfaceLow,
        borderRadius: 12,
        borderLeft: `4px solid ${accent}`,
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          background: `${accent}1a`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span className="material-symbols-outlined" style={{ color: accent }}>
          {icon}
        </span>
      </div>
      <div>
        <div
          style={{
            ...styles.headline,
            fontWeight: 700,
            fontSize: 14,
            color: C.onSurface,
            marginBottom: 4,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 12, color: C.onSurfaceVariant, lineHeight: 1.5 }}>{body}</div>
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: `${C.primary}99`,
            marginTop: 6,
          }}
        >
          {date}
        </div>
      </div>
    </div>
  );
}

/** Metric Tile */
function MetricTile({ icon, value, label, accent = C.secondary, highlight }) {
  return (
    <div
      style={{
        flex: 1,
        background: C.surfaceHigh,
        borderRadius: 12,
        padding: "14px 12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderBottom: highlight ? `2px solid ${accent}` : "none",
      }}
    >
      <span className="material-symbols-outlined" style={{ color: accent, marginBottom: 4, fontSize: 22 }}>
        {icon}
      </span>
      <div
        style={{ ...styles.headline, fontWeight: 900, fontSize: 20, color: C.onSurface }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 8,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: C.onSurfaceVariant,
          marginTop: 2,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/** Search Input */
function SearchInput({ placeholder, value, onChange }) {
  return (
    <div style={{ position: "relative" }}>
      <span
        className="material-symbols-outlined"
        style={{
          position: "absolute",
          left: 14,
          top: "50%",
          transform: "translateY(-50%)",
          color: C.outline,
          pointerEvents: "none",
          fontSize: 20,
        }}
      >
        search
      </span>
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          height: 52,
          paddingLeft: 46,
          paddingRight: 16,
          background: C.surfaceHighest,
          border: "none",
          borderBottom: `2px solid transparent`,
          borderRadius: 10,
          color: C.onSurface,
          fontSize: 14,
          fontFamily: "'Inter', sans-serif",
          outline: "none",
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) =>
          (e.target.style.borderBottomColor = C.primary)
        }
        onBlur={(e) =>
          (e.target.style.borderBottomColor = "transparent")
        }
      />
    </div>
  );
}

// ─── SCREENS ─────────────────────────────────────────────────────────────────

function HomeScreen() {
  return (
    <div style={{ paddingTop: 80, paddingBottom: 90, overflowY: "auto" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: 340, overflow: "hidden", margin: "0 0 24px" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, ${C.bg} 0%, ${C.bg}66 40%, transparent 100%)`,
            zIndex: 2,
          }}
        />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOoYMC4nFh-tpwprF9FDTZ5dXRTsQDj8j_ofWTgRyznGGLXa5xa0amgx6jWxaw8K2OBP1K-Qjp2viqHMv1NEANW4EBa9tDUWXYhqS8j0LQCqXHaT0jTUTqrCTgGEnUrdasu4026XJDFbdLsxSGQzRZ_eYSRjMORFlKxqe4c63xwCcaCaOZ5vA3umySS6jE8_s2vofBDwow5UTx0-DEXi3PpqKbjlFy-7IaAQ-7v3S63Ecf46sZcWLQbHzgHHujzASKpbZ38IMskr0"
          alt="Hero"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0 20px 20px",
            zIndex: 3,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <LivePill label="Major League News" />
            <span style={{ fontSize: 11, color: C.onSurfaceVariant }}>2 Hours Ago</span>
          </div>
          <h2
            style={{
              ...styles.headline,
              fontWeight: 900,
              fontSize: 26,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            CHAMPIONSHIP SERIES: THE WOLVES ADVANCE TO FINALS
          </h2>
          <button
            style={{
              background: C.primary,
              color: C.onPrimary,
              border: "none",
              borderRadius: 4,
              padding: "10px 20px",
              fontFamily: "'Lexend', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              cursor: "pointer",
            }}
          >
            Read Full Story
          </button>
        </div>
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Upcoming Games */}
        <section>
          <SectionHeader
            title={
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                Upcoming Games
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: C.secondary,
                    display: "inline-block",
                    animation: "pulse 2s infinite",
                  }}
                />
              </span>
            }
            action={() => {}}
            actionLabel="View Schedule"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <GameCard day="SAT" date="14" awayTeam="GRIZZLIES" homeTeam="EAGLES" venue="Central Park B" time="10:00 AM" />
            <GameCard day="SAT" date="14" awayTeam="TIGERS" homeTeam="HAWKS" venue="Oak Ridge Stadium" time="1:30 PM" />
            <GameCard day="SUN" date="15" awayTeam="WOLVES" homeTeam="BEARS" venue="Riverside Field" time="11:00 AM" />
          </div>
        </section>

        {/* Announcements */}
        <section>
          <SectionHeader title="Local Announcements" />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <AnnouncementCard
              icon="campaign"
              title="Registration Open for Fall Clinic"
              body="Early bird registration is now open for all age groups until July 31st. Limited spots in 10U division."
              date="Posted Jul 05, 2024"
              accent={C.primary}
            />
            <AnnouncementCard
              icon="warning"
              title="Field Update: West Ridge Park"
              body="Fields closed for maintenance this Sunday. Sessions moved to East Side Commons."
              date="Posted Jul 08, 2024"
              accent={C.tertiary}
            />
          </div>
        </section>

        {/* Field Status Metrics */}
        <section>
          <SectionHeader title="Field Conditions" />
          <div style={{ display: "flex", gap: 8 }}>
            <MetricTile icon="wb_sunny" value="78°F" label="Perfect Conditions" accent="#75ff68" />
            <MetricTile icon="water_drop" value="10%" label="Precipitation" accent={C.primary} />
            <MetricTile icon="check_circle" value="OPEN" label="Main Field" accent={C.secondary} highlight />
            <MetricTile icon="groups" value="1.2K" label="Active Players" accent={C.primary} highlight />
          </div>
        </section>
      </div>
    </div>
  );
}

function BrowseLeaguesScreen() {
  const [query, setQuery] = useState("");

  const leagues = [
    {
      name: "OAKLAND EAGLES",
      subtitle: "Registration Closing in 2 Days",
      meta: "8.2 mi away",
      badge: true,
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnuDX-eJHPUvt0qVVPPn4lXJ9RVBKOJhFEbSLacPmAEZJUoJoW8xf3duTkZyi8kHi7yeMD_cDsGu2k3yoYk4gxmV44ScMRk320IINsA4zyqJxaJfIV05rPTQWY1k9Amx05VYv81_ijx2cnVi3BxBut1zMrhsB5sFwLeQIkoe9-xWMBEnDWxoGW-UbUsCnize8YNDsNTvF9h8f0LZKSzAtMD5ppezS-Do1KIuMBwWusJcnGtzZJ7t5K3ugRC4fWZjMnX1jwgJ6t4AU",
    },
    {
      name: "MARIN MARINERS",
      subtitle: "Winter Season Starts Dec 15",
      meta: "12.5 mi away",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyY03IviXkyLIKMlHLhkMkVI-P6ESLTjNlKT19LkHlrzWNPRy037YgbnkdeeLTKZ0PaL99ckNqUVghFE4KNTpfj6uWHWhfP59OojoPZHjXFspUcmqWzD7rHhjn1cgCDZztN98fZCePEad5uPHo-9L4_hGT1BqSFmUFGSCkFCmZ3m0Z9Spn_NNt69dBvm_SDGerNVyQiIZSMlm-scz82eEMYOZA9XdInA6rXm6No4VzqdhgCwYyfflgTyzOnBJhLJfSWqqxoqSQfiU",
    },
    {
      name: "BERKELEY BEARS",
      subtitle: "Top Ranked Junior Division",
      meta: "15.1 mi away",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxCg46L8JOoqWDAo_XebByjB19tdk4JoPdu3PRNOwCs34jW38Ir9AzidtywZhxfN5aU7iKHUo9v45bQIHzG53-KOSFMo7WZNVkMZKs6BXLY41od8xLLH3FFy5ixnkDhi_KdgoIz-_YQamZCewfID2QrpiLJcfq1wFGvXnUd4Np-mQfnsQDV9Rdu9L0cx0pFbKgEePtJM8-x_zYvKQ38Z6NLND1vS9Wi63OXRqbiWiQWXvDWKuheRMfwO9C5PGAIdDkqKsZql6tFjg",
    },
    {
      name: "FRISCO FALCONS",
      subtitle: "Spring Season Open",
      meta: "22.3 mi away",
    },
  ];

  const filtered = leagues.filter((l) =>
    l.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ paddingTop: 80, paddingBottom: 90, overflowY: "auto" }}>
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Search */}
        <SearchInput
          placeholder="Search leagues, town, or zip code"
          value={query}
          onChange={setQuery}
        />

        {/* Primary League Hero */}
        <section>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <span
              style={{
                ...styles.headline,
                fontSize: 12,
                fontWeight: 700,
                color: C.secondary,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Your Primary League
            </span>
          </div>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 14,
              background: C.primaryContainer,
              padding: "20px 20px",
              cursor: "pointer",
            }}
          >
            {/* bg ornament */}
            <div
              style={{
                position: "absolute",
                right: -40,
                bottom: -40,
                opacity: 0.08,
                transform: "rotate(12deg) scale(1.5)",
                pointerEvents: "none",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 120 }}>
                stadium
              </span>
            </div>
            <div style={{ position: "relative", zIndex: 2, display: "flex", gap: 16, alignItems: "center" }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 10,
                  background: C.surfaceHigh,
                  borderLeft: `4px solid ${C.secondary}`,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJl0hdcx4vvTa_NEmd8SrDcabZHBbqtdlpc4Tl4yDPcGvBZKszTXAznP1RjHPZIVa6WCILvGk4ME8qJpktWNrgsoi1HJEecBVfCpv8VCeog7zZZ1el4Plxwioivgu_6zPRpHDIn7ZrGX8yNHlaWkbcWzzGAWSMmi9Xga6uM-0wBBrRW34lMnZcw_QRpBUUwveVJZH_vQasXjsyaWcP4QViVNSWEmCVMdqtOq6Dl0wDp8smqklIf7HxW67hGbMFwmapSpZAi3cBKJk"
                  alt="West Coast Wildcats"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: C.secondary,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: 4,
                  }}
                >
                  Active Membership
                </div>
                <div
                  style={{
                    ...styles.headline,
                    fontWeight: 900,
                    fontSize: 20,
                    color: C.onPrimary,
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  WEST COAST WILDCATS
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  {[
                    { icon: "location_on", text: "SAN FRANCISCO, CA" },
                    { icon: "groups", text: "24 TEAMS" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 10,
                        color: C.onPrimaryContainer,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                        {item.icon}
                      </span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended */}
        <section>
          <SectionHeader title="Recommended Nearby" action={() => {}} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {filtered.map((league) => (
              <LeagueItem key={league.name} {...league} />
            ))}
          </div>
        </section>

        {/* Browse All CTA */}
        <button
          style={{
            width: "100%",
            padding: "18px",
            background: C.surfaceHighest,
            border: `1px solid ${C.outlineVariant}1a`,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = C.surfaceBright)}
          onMouseLeave={(e) => (e.currentTarget.style.background = C.surfaceHighest)}
        >
          <span className="material-symbols-outlined" style={{ color: C.primary }}>
            map
          </span>
          <span
            style={{
              ...styles.headline,
              fontWeight: 700,
              fontSize: 13,
              color: C.onSurface,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Browse All Leagues on Map
          </span>
        </button>
      </div>
    </div>
  );
}

function StandingsScreen() {
  const [tab, setTab] = useState("standings");

  const teams = [
    { name: "Iron Birds", div: "North", w: 12, l: 2, pct: ".857", gb: "—", l10: "9-1", color: C.secondary },
    { name: "Mud Hens", div: "South", w: 10, l: 4, pct: ".714", gb: "2.0", l10: "7-3", color: C.primary },
    { name: "River Cats", div: "North", w: 8, l: 6, pct: ".571", gb: "4.0", l10: "5-5", color: `${C.outlineVariant}55` },
    { name: "Grasshoppers", div: "South", w: 4, l: 10, pct: ".286", gb: "8.0", l10: "2-8", color: C.tertiary },
    { name: "Raptors", div: "North", w: 2, l: 12, pct: ".143", gb: "10.0", l10: "1-9", color: C.tertiary },
  ];

  const results = [
    { date: "June 14", winner: "Iron Birds", loser: "River Cats", winScore: 8, loseScore: 3 },
    { date: "June 13", winner: "Mud Hens", loser: "Grasshoppers", winScore: 11, loseScore: 4 },
    { date: "June 11", winner: "Iron Birds", loser: "Raptors", winScore: 6, loseScore: 1 },
  ];

  return (
    <div style={{ paddingTop: 80, paddingBottom: 90, overflowY: "auto" }}>
      {/* Editorial Header */}
      <div
        style={{
          margin: "0 16px 20px",
          background: C.surfaceLow,
          borderRadius: 14,
          padding: "20px 20px",
          borderLeft: `4px solid ${C.secondary}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "35%",
            opacity: 0.08,
            overflow: "hidden",
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG2kKHZypwqij8pxo7keEobMoqH9a6aIf9rvg_vlPk0Fucu-6vSNF5b9cuUwQRmuNMbES_KUF9x0j8MJIRImE9uflizpaAupf726bZ92s6ujTvpAeX32WqxaMfhICy9Rv_nD9iB7eyMSzulmh94jx8dJQeDU_sKPvFblaYIp0XhmIE-9KM2M_yvra6OKmOr47tAfiTqQNz0m2ES4f731pB00wsIqBqv5STDDaukFI5IMjgB54hkimaa7TDdqRAVnbUAph_tDC7RSc"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }}
          />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: C.secondary,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: 4,
            }}
          >
            Summer Season 2024
          </div>
          <h2
            style={{
              ...styles.headline,
              fontWeight: 900,
              fontSize: 30,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: 14,
            }}
          >
            League <span style={{ color: C.primary }}>Standings</span>
          </h2>
          <div style={{ display: "flex", gap: 8 }}>
            {["standings", "results"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  background: tab === t ? C.primary : C.surfaceHighest,
                  color: tab === t ? C.onPrimary : C.primary,
                  border: "none",
                  borderRadius: 4,
                  padding: "8px 18px",
                  fontFamily: "'Lexend', sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                }}
              >
                {t === "standings" ? "Standings" : "Recent Results"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 16 }}>
        {tab === "standings" ? (
          <div
            style={{
              background: C.surfaceLow,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                padding: "12px 20px",
                background: C.primaryContainer,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  ...styles.headline,
                  fontWeight: 700,
                  fontSize: 13,
                  color: C.primary,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Major Division
              </span>
              <span
                style={{ fontSize: 9, color: `${C.onPrimaryContainer}b0`, textTransform: "uppercase" }}
              >
                Updated 2h ago
              </span>
            </div>
            {/* Table Headers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 44px 44px 56px 44px 44px",
                padding: "8px 20px",
                background: `${C.surfaceHigh}88`,
              }}
            >
              {["Team", "W", "L", "PCT", "GB", "L10"].map((h, i) => (
                <div
                  key={h}
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: C.onSurfaceVariant,
                    textAlign: i > 0 ? "center" : "left",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>
            {teams.map((team, idx) => (
              <div
                key={team.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 44px 44px 56px 44px 44px",
                  padding: "12px 20px",
                  background:
                    idx % 2 === 1 ? `${C.surfaceLowest}44` : "transparent",
                  borderTop: `1px solid ${C.outlineVariant}12`,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.surfaceBright)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    idx % 2 === 1 ? `${C.surfaceLowest}44` : "transparent")
                }
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 4,
                      height: 32,
                      borderRadius: 4,
                      background: team.color,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        ...styles.headline,
                        fontWeight: 700,
                        fontSize: 13,
                        color: C.onSurface,
                      }}
                    >
                      {team.name}
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        textTransform: "uppercase",
                        color: C.onSurfaceVariant,
                        fontWeight: 600,
                      }}
                    >
                      {team.div}
                    </div>
                  </div>
                </div>
                {[team.w, team.l].map((v, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.headline,
                      fontWeight: 700,
                      fontSize: 14,
                      color: C.onSurface,
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {v}
                  </div>
                ))}
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 13,
                    color: idx === 0 ? C.secondary : C.onSurface,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {team.pct}
                </div>
                {[team.gb, team.l10].map((v, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: 12,
                      color: C.onSurfaceVariant,
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {v}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionHeader title="Latest Results" action={() => {}} />
            {results.map((r) => (
              <ResultCard key={r.date} {...r} />
            ))}
          </div>
        )}

        {/* Player of the Week */}
        <div
          style={{
            background: `linear-gradient(135deg, ${C.primaryContainer}, ${C.surfaceHighest})`,
            borderRadius: 14,
            padding: "20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", right: -16, bottom: -16, opacity: 0.15 }}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 100, color: C.primary, fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          </div>
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: C.primary,
              marginBottom: 4,
            }}
          >
            Player of the Week
          </div>
          <div
            style={{
              ...styles.headline,
              fontWeight: 900,
              fontSize: 22,
              color: C.onSurface,
              textTransform: "uppercase",
              fontStyle: "italic",
              marginBottom: 14,
            }}
          >
            J. Thompson
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <StatBlock label="AVG" value=".542" highlight />
            <StatBlock label="HR" value="3" highlight />
            <StatBlock label="RBI" value="12" highlight />
          </div>
        </div>
      </div>
    </div>
  );
}

function LiveGameScreen() {
  return (
    <div style={{ paddingTop: 80, paddingBottom: 90, overflowY: "auto" }}>
      {/* Scoreboard Hero */}
      <div
        style={{
          margin: "0 16px 20px",
          background: C.primaryContainer,
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(45deg, #b1c7f2 25%, transparent 25%, transparent 50%, #b1c7f2 50%, #b1c7f2 75%, transparent 75%, transparent)",
            backgroundSize: "48px 48px",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <LivePill label="Live Center" />
            <div
              style={{
                ...styles.headline,
                fontSize: 11,
                fontWeight: 700,
                color: C.onPrimaryContainer,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              TOP 4TH INNING
            </div>
          </div>
          {/* Score Display */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            {/* Home Team */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: C.surfaceHigh,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 10px",
                  border: `2px solid ${C.primary}33`,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: C.primary, fontSize: 28, fontVariationSettings: "'FILL' 1" }}
                >
                  pets
                </span>
              </div>
              <div
                style={{
                  ...styles.headline,
                  fontWeight: 900,
                  fontSize: 14,
                  textTransform: "uppercase",
                  color: C.onSurface,
                }}
              >
                TIGERS
              </div>
              <div
                style={{
                  ...styles.headline,
                  fontWeight: 900,
                  fontSize: 52,
                  color: C.primary,
                  lineHeight: 1,
                  marginTop: 4,
                }}
              >
                4
              </div>
            </div>

            {/* Diamond + Inning */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              {/* Mini Diamond */}
              <div style={{ position: "relative", width: 64, height: 64 }}>
                {[
                  { top: 0, left: "50%", transform: "translateX(-50%) rotate(45deg)", active: false }, // 2nd
                  { top: "50%", right: 0, transform: "translateY(-50%) rotate(45deg)", active: true }, // 1st
                  { top: "50%", left: 0, transform: "translateY(-50%) rotate(45deg)", active: false }, // 3rd
                ].map((pos, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: 14,
                      height: 14,
                      background: pos.active ? C.secondary : "transparent",
                      border: `2px solid ${pos.active ? C.secondary : C.outlineVariant}`,
                      ...pos,
                    }}
                  />
                ))}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: C.onPrimaryContainer, fontSize: 14 }}>
                    home
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: C.surfaceHighest,
                  padding: "4px 12px",
                  borderRadius: 6,
                  ...styles.headline,
                  fontWeight: 700,
                  fontSize: 12,
                  color: C.onSurfaceVariant,
                  letterSpacing: "0.1em",
                }}
              >
                2 - 1
              </div>
            </div>

            {/* Away Team */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: C.surfaceHigh,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 10px",
                  border: `2px solid ${C.tertiary}33`,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: C.tertiary, fontSize: 28, fontVariationSettings: "'FILL' 1" }}
                >
                  rocket_launch
                </span>
              </div>
              <div
                style={{
                  ...styles.headline,
                  fontWeight: 900,
                  fontSize: 14,
                  textTransform: "uppercase",
                  color: C.onSurface,
                }}
              >
                ROCKETS
              </div>
              <div
                style={{
                  ...styles.headline,
                  fontWeight: 900,
                  fontSize: 52,
                  color: C.onSurface,
                  lineHeight: 1,
                  marginTop: 4,
                }}
              >
                2
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Line Score */}
        <div
          style={{
            background: C.surfaceLow,
            borderRadius: 14,
            padding: "16px 18px",
            overflowX: "auto",
          }}
        >
          <SectionHeader title="Line Score" />
          <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["TEAM", "1", "2", "3", "4", "R", "H"].map((h) => (
                  <th
                    key={h}
                    style={{
                      ...styles.headline,
                      fontSize: 9,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: h === "R" ? C.primary : C.onSurfaceVariant,
                      paddingBottom: 8,
                      textAlign: h === "TEAM" ? "left" : "center",
                      paddingRight: 8,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { team: "TIG", innings: [1, 0, 3, 0], r: 4, h: 6 },
                { team: "ROC", innings: [2, 0, 0, "-"], r: 2, h: 3 },
              ].map((row) => (
                <tr key={row.team} style={{ borderTop: `1px solid ${C.outlineVariant}1a` }}>
                  <td
                    style={{
                      ...styles.headline,
                      fontWeight: 700,
                      fontSize: 12,
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingRight: 8,
                      textTransform: "uppercase",
                    }}
                  >
                    {row.team}
                  </td>
                  {row.innings.map((v, i) => (
                    <td key={i} style={{ textAlign: "center", fontSize: 12, paddingRight: 8, color: C.onSurface }}>
                      {v}
                    </td>
                  ))}
                  <td
                    style={{
                      textAlign: "center",
                      ...styles.headline,
                      fontWeight: 900,
                      fontSize: 14,
                      color: C.primary,
                      paddingRight: 8,
                    }}
                  >
                    {row.r}
                  </td>
                  <td style={{ textAlign: "center", fontSize: 12, color: C.onSurfaceVariant }}>
                    {row.h}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Play-by-Play */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span
              style={{
                ...styles.headline,
                fontWeight: 700,
                fontSize: 13,
                textTransform: "uppercase",
                color: C.secondary,
              }}
            >
              Play-by-Play
            </span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                textTransform: "uppercase",
                color: C.onSurfaceVariant,
                background: C.surfaceContainer,
                padding: "3px 8px",
                borderRadius: 4,
              }}
            >
              Newest First
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                background: C.surfaceHigh,
                borderRadius: 12,
                padding: "14px 16px",
                borderLeft: `4px solid ${C.secondary}`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: C.secondary,
                  }}
                >
                  Current Play
                </span>
                <span style={{ fontSize: 9, color: C.onSurfaceVariant, fontWeight: 700 }}>
                  TOP 4 · 2-1 COUNT
                </span>
              </div>
              <p style={{ fontSize: 13, color: C.onSurface, lineHeight: 1.5 }}>
                <strong style={{ color: C.primary }}>J. Miller</strong> connects on a line drive to
                right field. <span style={{ color: C.secondary, fontWeight: 700 }}>R. Sanchez</span>{" "}
                advances to second base.
              </p>
            </div>
            {[
              { type: "Strike", detail: "TOP 4 · 1-1 COUNT", text: "Foul ball down the third base line. Strike two." },
              { type: "Ball", detail: "TOP 4 · 1-0 COUNT", text: "Pitch high and outside. Ball one." },
              { type: "Single", detail: "TOP 3 · FULL COUNT", text: "Line drive between first and second. Runner scores." },
            ].map((play) => (
              <div
                key={play.type + play.detail}
                style={{
                  background: C.surfaceLow,
                  borderRadius: 10,
                  padding: "12px 14px",
                  borderLeft: `4px solid ${C.outlineVariant}`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", color: C.onSurfaceVariant }}>
                    {play.type}
                  </span>
                  <span style={{ fontSize: 9, color: C.onSurfaceVariant }}>{play.detail}</span>
                </div>
                <p style={{ fontSize: 12, color: C.onSurfaceVariant, lineHeight: 1.5 }}>{play.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App({ rightAction }) {
  const [screen, setScreen] = useState("home");

  const screens = {
    home: <HomeScreen />,
    leagues: <BrowseLeaguesScreen />,
    standings: <StandingsScreen />,
    live: <LiveGameScreen />,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Inter:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { display: none; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
      <div style={styles.app}>
        <TopBar rightAction={rightAction} />
        {screens[screen]}
        <BottomNav active={screen} onNavigate={setScreen} />
      </div>
    </>
  );
}
