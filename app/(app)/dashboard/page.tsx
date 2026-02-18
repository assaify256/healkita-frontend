import AuthProvider from "@/components/authProvider";


export default function Page() {
    return (
        <AuthProvider>
            <p>Hi</p>
        </AuthProvider>
    );
}
