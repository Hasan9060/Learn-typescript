// Question : 60
/*Self-Running User Profile: Create a quick, self-setup profile for a user that can
 tell you the user's name and age.*/
var UserProfile = /** @class */ (function () {
    function UserProfile(name, age) {
        this.name = name;
        this.age = age;
    }
    UserProfile.prototype.displayProfile = function () {
        console.log("Name: ".concat(this.name));
        console.log("Age: ".concat(this.age));
    };
    return UserProfile;
}());
// Self-setup profile
(function () {
    var name = "Syed Hasan Rafay";
    var age = 17;
    var userProfile = new UserProfile(name, age);
    console.log("\n");
    console.log("User Profile:");
    userProfile.displayProfile();
})();
