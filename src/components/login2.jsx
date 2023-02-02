// import React from "react";
// import shareVideo from "../assets/share.mp4";
// import logo from "../assets/images/logowhite.png";
// import { auth, provider } from "../firebase";

// import { client } from "../client";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//       showPassword: false,
//     };
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { email, password } = this.state;

//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.error(error);
//     }

//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div className="flex justify-start items-center flex-col h-screen">
//         <div className="relative w-full h-full">
//           <video
//             src={shareVideo}
//             type="video/mp4"
//             loop
//             controls={false}
//             muted
//             autoPlay
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
//           <div className="p-5">
//             <img src={logo} width="130px" alt="logo" />
//           </div>
//           <div className="shadow-2x1">
//             <form className="sign-in-form" onSubmit={this.handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={this.handleChange}
//                 label="Email Address"
//                 required
//                 placeholder="email"
//               />
//               <input
//                 type={this.state.showPassword ? "text" : "password"}
//                 name="password"
//                 value={password}
//                 onChange={this.handleChange}
//                 label="Password"
//                 required
//                 placeholder="password"
//               />
//               <button
//                 className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
//                 type="submit"
//               >
//                 Sign in with Google
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
