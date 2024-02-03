import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "roundhouse.proxy.rlwy.net",
  user: "root",
  password: "HFHdCCGGbC5eAFAAgH-ff6fE3c545-g2",
  port: 37930,
  database: "railway",
});
