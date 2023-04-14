import { BreadCrumbItemProps, useTranslationRoute, useTranslations } from "@mzara/component"

export const useTranslationBreadCrumb = (): Array<BreadCrumbItemProps> => {

	const [
		HOME,
		TITLE
	] = useTranslations(i18n)
	const url = useTranslationRoute()
	
    return [
		{
			label: HOME,
			startIcon: 'fa-solid fa-home',
			link: url('')
		},
		{
			label: TITLE,
			startIcon: 'fa-solid fa-language',
			className: 'active'
		}
	]
}

const i18n = [
	'std_home',
	'Bo.Translation.title'
]
