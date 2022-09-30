import React from 'react';
import { useRouter } from 'next/router';
import { getCsrfToken } from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next';
import styles from '../styles/Form.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';


export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    axios
      .post('/api/emailcontactform', data)
      .then((_res: any) => {
        alert('Your Message has been emailed to admin');
        router.push('/')
      })
      .catch((err: any) => console.log(err));
      console.log(data);
  };

  return (
    <div className="main">
      <h2>Contact us</h2>

      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input
          {...register('csrfToken')}
          type="hidden"
          defaultValue={csrfToken}
        /> */}
        
        <input
          {...register('name', {
            required: true,
            maxLength: 65,
            minLength: 2,
            pattern: /[A-Za-z0-9_.-]/,
          })}
          type="text"
          placeholder="Enter Your Name "
          className={styles.formInput}
        />
        <p className={styles.formError}>
          {errors.name && <span> Name is required</span>}
        </p>
       
        <input
          {...register('email', {
            required: true,
            maxLength: 65,
            minLength: 4,
          })}
          type="email"
          placeholder="Enter your email address "
          className={styles.formInput}
        />
        <p className={styles.formError}>
          {errors.email && <span> Email is required</span>}
        </p>{' '}
        
        <input
          {...register('phone', {
            pattern: /^\d+$/,
            required: true,
          })}
          type="text"
          placeholder="Enter your cell phone number   "
          className={styles.formInput}
        />
        <p className={styles.formError}>
          {errors.phone && <span>Your Cell Phone Number is required</span>}
        </p>
       
        <textarea
          {...register('message', {
            required: true,
            maxLength: 250,
            minLength: 4,
            pattern: /[A-Za-z0-9_.-]/,
          })}
          rows={6}
          placeholder="Please enter your message "
          className={styles.formInput}
        />
        <p className={styles.formError}>
          {errors.message && <span> Message is required</span>}
        </p>
        <button type="submit" className="cta-btn">
          Send Message
        </button>
      </form>
      <br />

      <br />
    </div>
  );
}


// This is the recommended way for Next.js 9.3 or newer
// export async function getServerSideProps(context: any) {
//   const csrfToken = await getCsrfToken(context);
//   return {
//     props: { csrfToken  },
//   };
// }