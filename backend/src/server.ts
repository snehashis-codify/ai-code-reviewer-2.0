import express from "express";
import type { Express } from "express";
function createApplication(): Express {
  const app = express();

  return app;
}

export default createApplication;
