// Question : 60

/*Self-Running User Profile: Create a quick, self-setup profile for a user that can
 tell you the user's name and age.*/
 class UserProfile {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    displayProfile(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}
// Self-setup profile
(function() {
    const name = "Syed Hasan Rafay";
    const age = 17;
    const userProfile = new UserProfile(name, age);
    console.log ("\n")
    console.log("User Profile:");
    userProfile.displayProfile();
})();


 
  










