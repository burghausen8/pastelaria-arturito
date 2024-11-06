import Input from '@/components/Input/input';
import { router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik, useFormik } from 'formik';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { z } from 'zod';
import { toFormikValidate } from 'zod-formik-adapter';
import { authF } from '@/core/config/firebaseConfig';
import React, { useState } from 'react';
import fonts from '@/constants/Fonts';
import appColors from '@/constants/Colors';
import BackgroundSvg from './../assets/svg/background.svg';
import { ROUTES } from '@/constants/Routes';
import colors from '@/constants/Colors';

const FormSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string(),
});

type FormValues = z.infer<typeof FormSchema>;
const { width, height } = Dimensions.get('window');

export default function LoginFormScreen() {

  const [errortext, setErrortext] = useState('');

  const { initialValues } = useFormik({
    initialValues: {
      email: 'cwi@cwi.com.br',
      password: '1234'
    },
    onSubmit: (values: FormValues) => {
      console.log(values)

    },
  });

  return (
    <View style={styles.container}>
      <BackgroundSvg width={width} height={height} style={StyleSheet.absoluteFillObject} />
      <Image
        source={require('@/assets/images/avatar.png')}
        style={styles.logo}
      />
      <View style={styles.divider} />
      <Text style={styles.title}>Pastelaria do Arturito</Text>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          //TODO: passando direto pelo login
          router.push(ROUTES.TABS)
          console.log(values);

          signInWithEmailAndPassword(authF, values.email, values.password)
            .then(() => {
              router.push(ROUTES.TABS)
            })
            .catch(error => {
              console.log(error)
              if (error.code === 'auth/invalid-credential' || error.code === 'auth/invalid-email') {
                setErrortext("Credenciais inválidas");
              }
              if (error.code === 'auth/missing-password') {
                setErrortext("Senha não informada");
              }
            })

        }}
        validate={toFormikValidate(FormSchema)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <>
            <Input
              iconName="mail-outline"
              placeholder="E-mail"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              textContentType='emailAddress'
              autoComplete='email'
              autoCapitalize='none'
              value={values.email}
            />
            {(errors.email && touched.email) && <Text style={styles.error}>{errors.email}</Text>}

            <Input
              isPassword
              iconName="lock-closed-outline"
              placeholder="Senha"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {(errors.password && touched.password) && <Text style={styles.error}>{errors.password}</Text>}

            {errortext != '' ? (
              <Text style={styles.error}>
                {errortext}
              </Text>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </>
        )}

      </Formik>
      <Image source={require('@/assets/images/or-line.png')} />
      <Image source={require('@/assets/images/login-google.png')} />
      <Image source={require('@/assets/images/login-facebook.png')} style={styles.image} />
      <TouchableOpacity style={styles.registerView} onPress={() => {
        router.push(ROUTES.REGISTER)
      }}>
        <Text style={styles.accountText}>Não tem conta?</Text>
        <Text style={styles.registerText}> registre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: colors.background,
  },
  divider: {
    height: 1,
    backgroundColor: appColors.lightGray,
    width: '60%',
    marginBottom: 8,
  },
  title: {
    marginBottom: 64,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: fonts.regular
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 16,
    alignSelf: 'center',
  },
  error: {
    color: colors.redAlert,
    fontFamily: fonts.bold,
    fontSize: 12,
    paddingBottom: 8,
    textAlign: 'left',
    width: '100%',
  },
  image: {
    marginTop: -50,
  },
  button: {
    backgroundColor: appColors.secondary,
    borderColor: appColors.regularGray,
    borderWidth: .5,
    borderRadius: 5,
    height: 57,
    width: 343,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 16,
    fontFamily: 'PoppinsBold',
  },
  buttonText: {
    fontSize: 14,
    color: colors.background,
    fontFamily: fonts.bold
  },
  registerView: {
    flexDirection: 'row'
  },
  accountText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text
  },
  registerText: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.secondary
  }
});


