import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try {
    res.status(200).send("Displays all payments");
  } catch (e) {
    res.status(500).send("There has been an error that has occured.");
  }
});

router.get("/:id", (req, res) => {
  try {
    res.status(200).send("Displays the payment");
  } catch {
    res.status(500).send("An error has occured");
  }
});

router.post("/", (req, res) => {
  try {
  } catch {
    res.status(500).send("Creates new payment");
  }
});

router.patch("/:id", (req, res) => {
  try {
    res.status(200).send("Updates the payment");
  } catch {
    res.status(500).send("An error has occured.");
  }
});

router.delete("/:id", (req, res) => {
  try {
    res.status(200).send("Deletes payment");
  } catch {
    res.status(500).send("There has been an error that occured");
  }
});

export default router;
