interface LayoutPropsType {
    children: React.ReactNode
}

export default function Layout({children}: LayoutPropsType){

    return(
        <html>
            <body>{children}</body>
        </html>
    )
}