import App from "./src/app";
import db from "./src/models"

const app = App({
	logger: true
})
const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
app.listen({port:Number(PORT)}, (err) => {
	if (err) {
		app.log.error(err);
		process.exit(1)
	}
	app.log.info(`SERVE ON ${PORT}`)
})
})