import Auth from "./authRoute.js";
import { Verify, VerifyRole } from "../middleware/verify.js";

const Router = (server) => {
    server.use('/v1/auth', Auth);
    
    server.get("/v1/user", Verify, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to the your Dashboard!",
        });
    });

    server.get("/v1/admin", Verify, VerifyRole, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to the Admin portal!",
        });
    });


    // home route with the get method and a handler
    server.get("/v1", (req, res) => {
        try {
            res.status(200).json({
                status: "success",
                data: [],
                message: "Welcome to our API homepage!",
            });
        } catch (err) {
            res.status(500).json({
                status: "error",
                message: "Internal Server Error",
            });
        }
    });
};

export default Router;