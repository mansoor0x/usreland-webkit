import { version, logger } from "./utils.mjs";

window.onload = async () => {
  try {
    logger.init();
    version.init();
    
    switch (version.console) {
      case 4:
        const ps4 = await import("./ps4/userland.mjs");
        await ps4.main();
        break;
      case 5:
        logger.info("PS5 support coming soon...");
        break;
      default:
        logger.info(`Unsupported console ${version.console}`);
    }
  } catch (e) {
    logger.error(e.message);
    logger.error(e.stack);
  }
};
