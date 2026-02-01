import { isoDateOnlyUTC, parseIsoDateOnlyUTC, toJstIso } from "../src/lib/date";

describe("isoDateOnlyUTC", () => {
  it("formats UTC date parts with zero padding", () => {
    const d = new Date(Date.UTC(2026, 0, 2, 3, 4, 5));
    expect(isoDateOnlyUTC(d)).toBe("2026-01-02");
  });

  it("uses UTC fields rather than local time", () => {
    const d = new Date("2026-12-31T23:30:00Z");
    expect(isoDateOnlyUTC(d)).toBe("2026-12-31");
  });
});

describe("toJstIso", () => {
  it("converts UTC ISO string to JST ISO string", () => {
    const input = "2026-01-29T15:01:17Z";
    expect(toJstIso(input)).toBe("2026-01-30T00:01:17.000+09:00");
  });

  it("preserves milliseconds and handles date rollover", () => {
    const input = "2024-12-31T23:59:59.123Z";
    expect(toJstIso(input)).toBe("2025-01-01T08:59:59.123+09:00");
  });

  it("returns input when parsing fails", () => {
    const input = "not-a-date";
    expect(toJstIso(input)).toBe(input);
  });
});

describe("parseIsoDateOnlyUTC", () => {
  it("parses YYYY-MM-DD as UTC date", () => {
    const d = parseIsoDateOnlyUTC("2026-01-31");
    expect(d).not.toBeNull();
    expect(isoDateOnlyUTC(d as Date)).toBe("2026-01-31");
  });

  it("returns null for invalid format", () => {
    expect(parseIsoDateOnlyUTC("2026-1-01")).toBeNull();
  });

  it("returns null for out-of-range dates", () => {
    expect(parseIsoDateOnlyUTC("2026-02-30")).toBeNull();
  });
});
