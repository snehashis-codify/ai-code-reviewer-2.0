import "dotenv/config";
import createApplication from "./server.js";
async function main() {
  try {
    const PORT = process.env.PORT;
    const server = createApplication();
    server.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log("Error while connecting to server");
    throw error;
  }
}
main();
