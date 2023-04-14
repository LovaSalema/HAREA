import { BreadCrumbItemProps, useTranslationRoute, useTranslations } from "@mzara/component"

export const useWizardDetailsBreadCrumb = (title: string): Array<BreadCrumbItemProps> => {

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
			link: url('wizard')
		},
		{
			label: title,
			className: 'active',
		}
	].reverse()
}

const i18n = [
	'std_home',
	'Bo.Wizard.title'
]
