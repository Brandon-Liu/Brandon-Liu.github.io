'use client';

import { useEffect, useRef } from 'react';

export type CadView = {
  image: string;
  label: string;
  callout?: {
    side: 'left' | 'right';
    y: number;
    target: [number, number];
  };
};

// Images and leader lines share the same coordinates so they stay registered
// at every viewport size. The extra 350 units on either side hold the labels.
const canvasWidth = 1908;
const canvasHeight = 1286;
const imageOffset = 350;
const hoverDelay = 150;

export function CadSubsystemViewer({
  id,
  label,
  views,
  selected,
  onSelect,
  active,
  small = false,
}: {
  id: string;
  label: string;
  views: CadView[];
  selected: number;
  onSelect: (index: number) => void;
  active: boolean;
  small?: boolean;
}) {
  const hoverTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimer.current !== null) {
        window.clearTimeout(hoverTimer.current);
        hoverTimer.current = null;
      }
    };
  }, [active, onSelect]);

  const selectImmediately = (index: number) => {
    if (hoverTimer.current !== null) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
    onSelect(index);
  };

  const selectAfterHoverDelay = (index: number) => {
    if (hoverTimer.current !== null) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      hoverTimer.current = null;
      onSelect(index);
    }, hoverDelay);
  };

  return (
    <div
      id={`${id}-views`}
      className={`cad-subsystem-views${small ? ' cad-render-small' : ''}`}
    >
      <div className="cad-subsystem-media">
        {views.map((view, index) => (
          <svg
            key={view.image}
            className={`cad-subsystem-view${selected === index ? ' is-active' : ''}`}
            viewBox={`-350 0 ${canvasWidth} ${canvasHeight}`}
            aria-label={`${label}: ${view.label}`}
            aria-hidden={!active || selected !== index}
          >
            <title>{`${label}: ${view.label}`}</title>
            <defs>
              <clipPath id={`${id}-crop-${index}`}>
                <rect width="1208" height="1286" />
              </clipPath>
            </defs>
            <image
              href={view.image}
              width="1208"
              height="1290"
              clipPath={`url(#${id}-crop-${index})`}
            />
          </svg>
        ))}

        {views.map((view, index) => (
          <svg
            key={`mobile-${view.image}`}
            className={`cad-subsystem-mobile-view${selected === index ? ' is-active' : ''}`}
            viewBox={`0 0 1208 ${canvasHeight}`}
            preserveAspectRatio="xMidYMid meet"
            aria-label={`${label}: ${view.label}`}
            aria-hidden={!active || selected !== index}
          >
            <title>{`${label}: ${view.label}`}</title>
            <image href={view.image} width="1208" height="1290" />
          </svg>
        ))}

        <svg
          className="cad-callout-lines"
          viewBox={`-350 0 ${canvasWidth} ${canvasHeight}`}
          aria-hidden="true"
        >
          {views.map((view, index) => {
            if (!view.callout) return null;
            const { side, y, target } = view.callout;
            const x = side === 'left' ? -70 : 1278;
            return (
              <g
                key={view.image}
                className={selected === index ? 'is-active' : ''}
              >
                <line x1={x} y1={y} x2={target[0]} y2={target[1]} />
                <circle cx={target[0]} cy={target[1]} r="7" />
              </g>
            );
          })}
        </svg>
      </div>

      <fieldset
        className="cad-callout-controls"
        aria-label={`${label} subsystem callouts`}
      >
        {views.map((view, index) => {
          if (!view.callout) return null;
          const { side, y } = view.callout;
          const x = side === 'left' ? -70 : 1278;
          return (
            <button
              key={view.image}
              type="button"
              className={`cad-callout cad-callout-${side}${selected === index ? ' is-active' : ''}`}
              style={{
                left: `${((x + imageOffset) / canvasWidth) * 100}%`,
                top: `${(y / canvasHeight) * 100}%`,
              }}
              disabled={!active}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') selectAfterHoverDelay(index);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === 'mouse') selectAfterHoverDelay(0);
              }}
              onFocus={() => selectImmediately(index)}
              onBlur={() => selectImmediately(0)}
              onClick={() => selectImmediately(index)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') selectImmediately(0);
              }}
              aria-label={`Highlight ${label}: ${view.label}`}
              aria-pressed={selected === index}
              aria-controls={`${id}-views`}
            >
              <span className="cad-callout-dot" aria-hidden="true" />
              <span className="cad-callout-label">{view.label}</span>
            </button>
          );
        })}
        <button
          type="button"
          className={`cad-full-view${selected === 0 ? ' is-active' : ''}`}
          disabled={!active}
          onClick={() => selectImmediately(0)}
          aria-pressed={selected === 0}
          aria-label={`Show ${label} full robot`}
        >
          Full robot
        </button>
      </fieldset>
    </div>
  );
}
