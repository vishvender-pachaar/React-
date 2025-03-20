import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client(); // Initializes the Appwrite client
  account; // Initializes the account service instance

  /**
   * Constructor: Sets up the Appwrite client and account service.
   */
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Set the API endpoint from configuration
      .setProject(conf.appwriteProjectId); // Set the Project ID from configuration
    this.account = new Account(this.client); // Initializes the Account service
  }

  /**
   * Creates a new user account in Appwrite.
   * @param {Object} params - The user account details.
   * @param {string} params.email - The email of the new user.
   * @param {string} params.password - The password for the new user.
   * @param {string} params.name - The name of the new user.
   * @returns {Promise<Object>} - Returns the created user account object or logs in the user.
   */
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name); // Create user account
      if (userAccount) {
        // If account is created, log the user in
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Error creating account:", error.message);
      throw error;
    }
  }

  /**
   * Logs in a user using their email and password.
   * @param {Object} params - The login credentials.
   * @param {string} params.email - The user's email.
   * @param {string} params.password - The user's password.
   * @returns {Promise<Object>} - Returns the session object for the logged-in user.
   */
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password); // Create a session for the user
    } catch (error) {
      console.error("Error logging in:", error.message);
      throw error;
    }
  }

  /**
   * Retrieves the current authenticated user's details.
   * @returns {Promise<Object|null>} - Returns the user object if authenticated, otherwise null.
   */
  async getCurrentUser() {
    try {
      return await this.account.get(); // Get the current authenticated user
    } catch (error) {
      console.error("Error fetching current user:", error.message);
      return null; // Return null if there is an error
    }
  }

  /**
   * Logs out the current authenticated user by deleting their session.
   * @returns {Promise<void>} - Resolves when the session is successfully deleted.
   */
  async logout() {
    try {
      await this.account.deleteSessions(); // Deletes all sessions for the user
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
}

// Create an instance of AuthService
const authService = new AuthService();

export default authService;
