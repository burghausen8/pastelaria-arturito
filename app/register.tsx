import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "@/components/Input/input";
import { Link, router } from "expo-router";
import { z } from "zod";
import { useFormik } from "formik";
import { toFormikValidate } from "zod-formik-adapter";
import appColors from "@/constants/Colors";
import strings from "@/constants/Strings";
import fonts from "@/constants/Fonts";
import colors from "@/constants/Colors";
import { UserService } from "@/services/user/user.service";
import { User } from "@/core/types/user";

const FormSchema = z.object({
    name: z.string().min(3, strings.registerErrorName).max(50),
    email: z.string().email(strings.registerErroEmail),
    password: z.string().min(6, strings.registerErrorPassword).max(50),
    confirmPassword: z.string().min(6, strings.registerErrorPassword).max(50),
});

type FormValues = z.infer<typeof FormSchema>;

export default function RegisterFormScreen() {

    const userService = new UserService();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async (values: FormValues) => {
            const user: User = {
                id: "1",
                email: values.email,
                password: values.password,
            };

            try {
                await userService.createUser(user);
                router.back();
            } catch (error) {
                console.log(error);
            }
        },
        validate: toFormikValidate(FormSchema),
    });

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/images/logo.png")} />
            <Text style={styles.title}>{strings.loginTitle}</Text>

            <Input
                iconName="person-outline"
                placeholder={strings.registerInputName}
                onChangeText={formik.handleChange('name')}
                onBlur={formik.handleBlur('name')}
                value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
                <Text style={styles.error}>{formik.errors.name}</Text>
            )}

            <Input
                iconName="mail-outline"
                placeholder={strings.registerInputEmail}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
                <Text style={styles.error}>{formik.errors.email}</Text>
            )}

            <Input
                iconName="lock-closed-outline"
                placeholder={strings.registerInputPassword}
                isPassword
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
                <Text style={styles.error}>{formik.errors.password}</Text>
            )}

            <Input
                iconName="lock-closed-outline"
                placeholder={strings.registerInputConfirmPassword}
                isPassword
                onChangeText={formik.handleChange('confirmPassword')}
                onBlur={formik.handleBlur('confirmPassword')}
                value={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                <Text style={styles.error}>{formik.errors.confirmPassword}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={() => formik.handleSubmit()}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <Text style={styles.text}>
                Já tem conta?
                <Link href="/" style={styles.signIn}> Faça o login</Link>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 8,
        backgroundColor: appColors.background,
    },
    logo: {
        width: 72,
        height: 72,
        marginBottom: 14,
        alignSelf: "center"
    },
    title: {
        fontSize: 16,
        marginBottom: 16,
        alignSelf: "center",
        fontFamily: fonts.bold
    },
    button: {
        backgroundColor: appColors.primary,
        borderRadius: 5,
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        color: appColors.light,
        marginBottom: 15,
        marginTop: 16,
        fontFamily: fonts.regular,
    },
    buttonText: {
        fontSize: 14,
        color: appColors.light,
        fontFamily: fonts.bold,
    },
    text: {
        alignSelf: 'center',
        fontFamily: fonts.regular,
        color: colors.text
    },
    signIn: {
        color: colors.primary,
        fontFamily: fonts.bold
    },
    error: {
        color: appColors.error,
        fontFamily: fonts.bold,
        fontSize: 12,
        paddingBottom: 8,
    },
});
