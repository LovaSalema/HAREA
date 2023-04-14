import { BreadCrumbItemProps, useTranslationRoute, useTranslations } from "@mzara/component"

export const useUserOrganisationBreadCrumb = (): Array<BreadCrumbItemProps> => {

	const [
		HOME,
		USER,
		TITLE
	] = useTranslations(i18n)
	const url = useTranslationRoute()
	
    return [
		{
			label: HOME,
			link: url('')
		},
		{
			label: USER,
			link: url('/user')
		},
		{
			label: TITLE,
			className: 'active'
		}
	]
}

const i18n = [
	'std_home',
	'std_user',
	'Generic.UserOrganisation.title'
]
