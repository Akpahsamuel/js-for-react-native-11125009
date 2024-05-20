

// userInfo.js

/**
 * Function to create user profiles.
 * 
 * @param {string[]} originalNames - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @return {object[]} - The array of user profile objects.
 */
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
      throw new Error('Both arrays must have the same length');
    }
  
    return originalNames.map((name, index) => {
      return {
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
      };
    });
  }
  
  
  const originalNames = ["Samuel", "Badu", "charles", "David", "Joe"];
  const modifiedNames = ["SAMUEL", "badu", "CHARLES", "david", "JOE"];
  const userProfiles = createUserProfiles(originalNames, modifiedNames);
  console.log(userProfiles);
  
  // Export the function for use in other modules
  module.exports = createUserProfiles;
  