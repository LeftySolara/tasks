/* eslint-disable import/no-extraneous-dependencies */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);

    this.auth = firebase.auth();
    this.db = firebase.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Task API ***

  /**
   * Adds a new task to the database.
   *
   * @param {Object} task The task to add.
   * @param {string} task.id The UUID of the task.
   * @param {string} task.title The title of the task.
   * @param {boolean} task.complete The completion status of the task.
   */
  addTask = (task) => {
    const { uid } = this.auth.currentUser;
    const ref = this.db.ref(`tasks/${uid}/${task.id}`);
    ref.set({
      id: task.id,
      title: task.title,
      complete: task.complete,
    });
  };

  /**
   * Gets a list of the current user's tasks.
   *
   * @param {Function} callback Callback function that takes a ref snapshot object.
   * @returns {Promise} Promise containing a snapshot of the user's project info.
   *
   */
  getUserTasks = (callback) => {
    const { uid } = this.auth.currentUser;
    return this.db.ref(`tasks/${uid}`).once('value', callback);
  };

  // *** Project API ***

  /**
   * Adds a project to the database.
   *
   * @param {Object} project The project to add.
   * @param {string} project.id The UUID of the project.
   * @param {string} project.title The title of the project.
   */
  addProject = (project) => {
    const { uid } = this.auth.currentUser;
    const ref = this.db.ref(`projects/${uid}/${project.id}`);
    ref.set({
      id: project.id,
      title: project.title,
    });
  };
}

export default Firebase;
