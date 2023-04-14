import { BreadCrumbItemProps, useTranslationRoute, useTranslations } from "@mzara/component"

export const useWizardNodeBreadCrumb = (): Array<BreadCrumbItemProps> => {

	const [
		HOME,
		TITLE
	] = useTranslations(i18n)
	const url = useTranslationRoute()
	
    return [
		{
			label: HOME,
			link: url('')
		},
		{
			label: TITLE,
			className: 'active'
		}
	]
}

const i18n = [
	'std_home',
	'Bo.WizardNode.title'
]
