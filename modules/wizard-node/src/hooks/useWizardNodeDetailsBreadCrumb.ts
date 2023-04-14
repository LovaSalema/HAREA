import { BreadCrumbItemProps, useTranslationRoute, useTranslations } from "@mzara/component"

export const useWizardNodeDetailsBreadCrumb = (title: string): Array<BreadCrumbItemProps> => {

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
			link: url('wizard-node')
		},
		{
			label: title,
			className: 'active',
		}
	]
}

const i18n = [
	'std_home',
	'Bo.WizardNode.title'
]
