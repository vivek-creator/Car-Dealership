import { createUser, loginUser } from '../model/user-schema.js'; //testing code after adding login validation

export const handleTransaction = async (request, response) => {
    const { carsData } = request.body;
    try {
        const result = await paymentTransaction(carsData);
        if (result.status === 'success') {
            response.status(200).json({ message: result.message, data: result });
        } else {
            response.status(401).json({ message: result.message });
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

export const addUser = async (request, response) => {
    const user = request.body;
    const validation = validateUserData(user);
    if (!validation.isValid) {
        response.status(400).json({ message: validation.errors.join(", ") });
        return;
    }
    
    try {
        const userId = await createUser(user);
        response.status(201).json({ user: { ...user, _id: userId } });
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
};

export const handleLogin = async (request, response) => {
    const { email, password } = request.body;
    try {
        const result = await loginUser(email, password);
        if (result.status === 'success') {
            response.status(200).json({ message: result.message });
        } else {
            response.status(401).json({ message: result.message });
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

function validateUserData(userData) {
    const { name, email, password, confirmPassword, phone } = userData;
    let errors = [];
    if (!name) errors.push("Name is required");
    if (!email) errors.push("Email is required");
    if (password !== confirmPassword) errors.push("Passwords do not match");
    if (!phone) errors.push("Phone number is required");

    return {
        isValid: errors.length === 0,
        errors
    };
}

// import { createUser, loginUser } from '../model/user-schema.js';//testing code after adding login validation

// export const addUser = async (request, response) => {
//     const user = request.body;
//     const validation = validateUserData(user);
//     if (!validation.isValid) {
//         response.status(400).json({ message: validation.errors.join(", ") });
//         return;
//     }
    
//     try {
//         const userId = await createUser(user);
//         response.status(201).json({ user: { ...user, _id: userId } });
//     } catch (error) {
//         response.status(409).json({ message: error.message });
//     }
// };

// export const handleLogin = async (request, response) => {
//     const { email, password } = request.body;
//     try {
//         const result = await loginUser(email, password);
//         if (result.status === 'success') {
//             response.status(200).json({ message: result.message });
//         } else {
//             response.status(401).json({ message: result.message });
//         }
//     } catch (error) {
//         response.status(500).json({ message: error.message });
//     }
// };

// function validateUserData(userData) {
//     const { name, email, password, confirmPassword, phone } = userData;
//     let errors = [];
//     if (!name) errors.push("Name is required");
//     if (!email) errors.push("Email is required");
//     if (password !== confirmPassword) errors.push("Passwords do not match");
//     if (!phone) errors.push("Phone number is required");

//     return {
//         isValid: errors.length === 0,
//         errors
//     };
// }



// import { createUser } from '../model/user-schema.js'; okk code 

// export const addUser = async (request, response) => {
//     const user = request.body;

//     try {
//         const validation = validateUserData(user);
//         if (!validation.isValid) {
//             response.status(400).json({ message: validation.errors.join(", ") });
//             return;
//         }
        
//         const userId = await createUser(user);
//         response.status(201).json({ user: { ...user, _id: userId } });
//     } catch (error) {
//         response.status(409).json({ message: error.message });
//     }
// };

// function validateUserData(userData) {
//     const { name, email, password, confirmPassword, phone } = userData;
//     let errors = [];
//     if (!name) errors.push("Name is required");
//     if (!email) errors.push("Email is required");
//     if (password !== confirmPassword) errors.push("Passwords do not match");
//     if (!phone) errors.push("Phone number is required");

//     return {
//         isValid: errors.length === 0,
//         errors
//     };
// }


// function validateUserData(userData) {
//     const { Name, Email, Password, confirmPassword, phone } = userData;
//     let errors = [];
//     if (!Name) errors.push("Name is required");
//     if (!Email) errors.push("Email is required");
//     if (Password !== confirmPassword) errors.push("Passwords do not match");
//     if (!phone) errors.push("Phone number is required");

//     return {
//         isValid: errors.length === 0,
//         errors
//     };
// }


// import User from '../model/user-schema.js';

// export const addUser = async (request, response) => {
//     const user = request.body;
//     console.log(user);
//   }  
//   const newUser =new User (user);

//   try {
//          await newUser.save();
//         response.status(201).json(newUser);
    
//        }catch (error){
//          response.status(409).json({message: error.message});
//        }