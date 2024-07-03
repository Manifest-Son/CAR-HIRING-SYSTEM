import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try {
    res.status(200).send("Displays all vehicles");
  } catch {
    res.status(500).send("Sorry, an error occured");
  }
});
router.get("/:id", (req, res) => {
  try {
    res.status(200).send("Displays a vehicle");
  } catch {
    res.status(500).send("Sorry an error has occured");
  }
});
router.post("/", (req, res) => {
  try {
    res.status(200).send("Creates a new vehicle");
  } catch {
    res.status(500).send("Sorry, an error occured");
  }
});
router.patch("/:id", (req, res) => {
  try {
    res.status(200).send("Updates the vehicle");
  } catch {
    res.status(500).send("Sorry, an error occured");
  }
});
router.delete("/:id", (req, res) => {
  try {
    res.status(200).send("Deletes a vehicle record");
  } catch {
    res.status(500).send("Sorry, an error occured");
  }
});

export default router;
