import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
export default (phase, { defaultConfig }) => {
  let nextConfig = {};
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    nextConfig = {
      env: {
        mongodb_username: "guimarkes457",
        mongodb_password: "75Kwe9fPCl2NIoYe",
        mongodb_cluster_name: "cluster0",
        mongodb_database_key: "events",
      },
    };
  } else {
    nextConfig = {
      env: {
        mongodb_username: "guimarkes457",
        mongodb_password: "75Kwe9fPCl2NIoYe",
        mongodb_cluster_name: "cluster0",
        mongodb_database_key: "events",
      },
    };
  }

  return nextConfig;
};
