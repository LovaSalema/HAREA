export const Badge = ({label, color, className,...props}:BadgeProps) => {
    return (
        <span className={className +" text-white text-[9px] px-2 py-[2px] w-fit rounded-full"} {...props} style={{backgroundColor: color}}>{label}</span>
    )
}

export type BadgeProps = {
    label?: string,
    color?: string,
    className?: string
}