const ReferralModel = require("../models/referral");

const createReferral = async (req, res) => {
  const { referrer, user, amount } = req.body;

  const referral = await ReferralModel.findOne({ referrer, user });

  if (referral) {
    res.json({ msg: "double-referral" });
    return;
  }

  const newReferral = new ReferralModel({
    referrer,
    user,
    amount,
  });

  await newReferral.save();

  res.json({ msg: "first-referral" });
};

const getReferral = async (req, res) => {
  const { ref } = req.query;

  const referrals = await ReferralModel.find({ referrer: ref })
    .sort({ createdAt: -1 })
    .limit(20);

  res.json({ referrals });
};

module.exports = {
  createReferral,
  getReferral,
};
