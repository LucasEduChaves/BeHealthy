import { Router } from './router.js'

const router = new Router()
router.add("/inferior", "./pages/inferior.html")
router.add("/superior", "./pages/superior.html")
router.add("/abdomen", "./pages/abdomen.html")
router.add("/user", "./user/recover/user.html")
router.add("/", "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route() 