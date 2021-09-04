import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Link from 'next/link'
import Auth from '../components/Auth'
import Account from '../components/Account'
import React from 'react'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

 export default class Kyc extends React.Component {
//     constructor(props) {
//         super();
//         this.props = props;
//         this.state = {
//             phone: '',
//             firstName: '',
//             lastName: '',
//             country: '',
//             city: ''
//         }
//     }

//     handleFormSubmit() {
//     e.preventDefault();
//     this.setState({
//       phone: '',
//       firstName: '',
//       lastName: '',
//       country: '',
//       city: '',
//     });
//   }

//   handleChange = (e) => {
//     this.setState({[e.target.name]:e.target.value});
//   }

//   componentDidMount() {
//     this.userData = JSON.parse(localStorage.getItem('user'));

//     if (localStorage.getItem('user')) {
//         this.setState({
//             phone: this.userData.phone,
//             firstName: this.userData.firstName,
//             lastName: this.userData.lastName,
//             country: this.userData.country,
//             city: this.userData.city,
//         });
//     } else {
//         this.setState({
//             phone: '',
//             firstName: '',
//             lastName: '',
//             country: '',
//             city: '',
//         });
//     }
// }

// componentWillUpdate(nextProps, nextState) {
//     localStorage.setItem('user', JSON.stringify(nextState));
//   }

  render() {
      return (
          <h1></h1>
      )
//   const [session, setSession] = useState(null)
// //   useEffect(() => {
// //     setSession(supabase.auth.session())
// //   })
//   if (session) {
//       return (
//           <h1> session yes </h1>
//       )
//   }
//   else return (
//       <>
//         <h1>You're not logged in</h1>
//         <Link href='/login'>
//             <a>Login</a>
//         </Link>
//     </>
//   )
}
}