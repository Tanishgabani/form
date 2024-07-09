import { User } from "../Model/user.model.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";

const userController = async (req, res) => {
  try {
    // Validation
    const { name, email, business } = req.body;
    if (!name || !email || !business) {
      throw new ApiError(404, "All fields are required.");
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      business,
    });

    if (!user) {
      throw new ApiError(404, "User not created.");
    }
    // Save user in database
    await user.save();
    res
      .status(200)
      .json(new ApiResponse(200, user, "User created successfully."));
  } catch (error) {
    console.log("Error : ", error);
    throw new ApiError(404, "Something went wrong to create user.");
  }
};

export { userController };
