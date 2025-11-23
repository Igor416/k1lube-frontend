export interface ICategory {
  name: string,
  label: string
}

export interface IPhoto {
  path: string,
  name: string
}

export interface IProduct {
  category: ICategory,
  slug: string,
  name: string,
  viscosity: string[]
  photo: IPhoto
}

export interface IDetailedProduct extends IProduct {
  shortDesc: string,
  desc: string,
  catalog: string,
  applications: string,
  standards: string,
  benefits: Array<{
    title: string,
    text: string
  }>,
  keyPropertiesPhoto: IPhoto,
  uniqueFeatures: string,
  uniqueFeaturesPhoto: IPhoto,
}

export interface IMessage {
  type: 'A' | 'P'
  contactPerson: string,
  jobTitle: string,
  phone: string,
  fax: string,
  email: string,
  message: string
}