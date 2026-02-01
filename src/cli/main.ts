import { getMyLogin, fetchCommits } from "../lib/index.js";

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN is required");

  const login = await getMyLogin(token);

  // 直近30日（必要なら 1ヶ月 = 30日固定じゃなく"先月分"に変更可能）
  const until = new Date();
  const since = new Date(until.getTime() - 30 * 24 * 60 * 60 * 1000);

  const commits = await fetchCommits(token, login, since, until);

  // JSON（配列）で出力
  console.log(JSON.stringify(commits, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
