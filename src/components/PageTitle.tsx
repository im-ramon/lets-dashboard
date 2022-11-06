interface PageTitleProps {
    title: string;
    subtitle?: string
}

function PageTitle({ title, subtitle }: PageTitleProps) {
    return (
        <div className="page-title">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    );
}

export default PageTitle;