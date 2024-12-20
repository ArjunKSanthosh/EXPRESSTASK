import {Router} from "express"
import * as us from "./requesthandler.js"

const router=Router();
router.route("/adduser").post(us.addUser);
// router.route("/getuser").post(us.getUser);
// router.route("/edituser/:_id").put(us.editUser);
// router.route("/deleteuser/:_id").delete(us.deleteUser);

export default router;

