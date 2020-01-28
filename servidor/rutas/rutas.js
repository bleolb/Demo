const express = require("express");

const router = express.Router();

const Ubicaciones = require("../models/ubicaciones");

//tipo_reservas metodos
router.get("/ubicaciones", (req, res) => {
    const { query } = req;
    Ubicaciones.findAll({ where: query })
        .then(reserva => {
            res.json(reserva);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/ubicaciones", (req, res, next) => {
    const datos = {
        longitude: req.body.longitude,
        latitude: req.body.latitude,
    };

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Datos incorrectos"
            });
    } else {
        Ubicaciones.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});

module.exports = router;