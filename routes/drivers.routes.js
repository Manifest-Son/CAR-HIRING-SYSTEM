import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try {
    res.status(200).send("Displays all drivers");
  } catch {
    res.status(500).send("Sorry, an error occured");
  }
});
router.get("/:id", (req, res) => {
  try {
    res.status(200).send("Displays a drivers");
  } catch {
    res.status(500).send("Sorry an error has occured");
  }
});
router.post("/", (req, res) => {
  try {
    res.status(200).send("Creates a new drivers");
  } catch {
    res.status(500).send("Sorry, an error occured");
  }
});
router.patch("/:id", (req, res) => {
  try {
    res.status(200).send("Updates the drivers");
  } catch {
    res.status(500).send("Sorry, an error occured");
  }
});
router.delete("/:id", (req, res) => {
  try {
    res.status(200).send("Displays all drivers");
  } catch {
    res.status(500).send("Sorry, an error occured");
  }
});

export default router;
