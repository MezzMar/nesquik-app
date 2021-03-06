import { Banner } from '../banners/banner.type'
import { Category, CategoryObject } from './categories.type'

export interface PaymentDetails {
  ubication: string
  account: string
  paymentType: string
  accountManager: string
  level: number
}

export interface Job {
  jobCategories: string[]
  name: string
  rating: number
  status: string
  jobID: string
  createdAt: string
  description: string
}

export interface Contact {
  instagram: string
  phoneNumber: string
  emails: string[]
  whatsapp: string
  twitter: string
}

export interface WeeklyBalance {
  scanDeduction: number
  quikDeduction: number
  net: number
  totalDeliveries: number
  totalPayments: number
  since: string
  previusBalance: number
  totalAdjustments: number
  currentBalance: number
  totalScan: number
  totalSales: number
  until: string
  totalCashOuts: number
}

export interface Promotion {
  isPromoted: boolean
  maxDistance: number
}

export interface StartWeek {
  lastTimePopUpShow: number
  popUpAlredyShow: boolean
}

export interface Payment {
  ubication: string
  accountManager: string
  account: string
  paymentType: string
}

export interface Schedule {
  initialTime: string
  onlyAllowMoto: boolean
  statusInRange: string
  finalTime: string
  finalDeliveryTime: number
  allowFree: boolean
  statusOutOfRange: string
  initialDeliveryTime: string
  deliveryFactor: number
}

export interface OwnerBank {
  name: string
  bankID: string
  image: string
  rif: string
}

export interface Currency {
  symbol: string
  code: string
  label: string
}

export interface Color {
  secondary: string
  primary: string
}

export interface PaymentType {
  buyPrice: number
  buyFee: number
  currency: Currency
  rate: number
  sellFee: number
  sellPrice: number
  title: string
  name: string
  requiresScreenshot: boolean
  paymentTypeID: string
  isAdminOnly?: boolean
  image: string
  color: Color
}

export interface PaymentMethod {
  ownerIdentification: string
  ownerBank: OwnerBank
  paymentMethodID: string
  rechargable: boolean
  ownerAccountNumber: string
  paymentMethod: string
  available: boolean
  ownerEmail: string
  phoneNumber: string
  paymentType: PaymentType
  ownerName: string
  pickupOnly: boolean
  scanOnly?: boolean
}

export interface ReducedDelivery {
  quikSubsidy: number
  motoReducedPrice: number
  pointsToFreeDelivery: number
  bikeReducedPrice: number
  distance: number
  affiliateSubsidy: number
  isActive: boolean
}

export interface MarketImages {
  profile: string
  header: string
  showcaseBackgroundImage: string
  backgroundImage: string
  marketing: string[]
  headerBackgroundColor: string
}

export interface Geolocation {
  _lat: number
  _long: number
}

export interface Coordinates {
  lng: number
  lat: number
}

export interface DeliveryRule {
  isFreeDelivery: boolean
  isActive: boolean
  carPrice: number
  to: number
  affiliateSubsidy: number
  from: number
  quikSubsidy: number
  bikePrice: number
  pointsToFreeDelivery: number
  motoPrice: number
}

export interface Color2 {
  primary: string
  secondary: string
}

export interface Currency2 {
  label: string
  code: string
  symbol: string
}

export interface PaymentType2 {
  buyFee: number
  title: string
  name: string
  image: string
  sellPrice: number
  isAdminOnly: boolean
  color: Color2
  rate: number
  buyPrice: number
  paymentTypeID: string
  currency: Currency2
  requiresScreenshot: boolean
  sellFee: number
}

export interface Affiliate {
  rif: string
  affiliateID: string
  name: string
}

export interface Market {
  pointsToFreeDelivery: number
  phoneNumber: string
  hasCompletedProfile: boolean
  sectorIndex: number
  bikeDistance: number
  hasPromo: number
  affiliateCategory: string
  rif: string
  paymentDetails: PaymentDetails
  cashBackPercentage: number
  status: string
  isDeliveryOnly: boolean
  layout: string
  deliveryServiceType: string
  account: string
  email: string
  allowFree: boolean
  acceptsCreditCard: boolean
  categories: CategoryObject<Category>
  jobs: Job[]
  contact: Contact
  ubication: string
  weeklyBalance: WeeklyBalance
  ranking: number
  promotion: Promotion
  startWeek: StartWeek
  productsWithFreeDelivery: number
  rating: number
  isPremium?: boolean
  name: string
  payment: Payment
  schedule: Schedule[]
  paymentMethods: PaymentMethod[]
  estimatedTime: number
  reducedDelivery: ReducedDelivery
  stockLabel: number
  // banner: Banner
  hasFreeDelivery: boolean
  initialDeliveryTime: string
  ownershipStatus: string
  percentageCommission: number
  finalDeliveryTime: number
  marketID: string
  images: MarketImages
  affiliateID: string
  onlyAllowMoto: boolean
  isSocialMediaLinked: boolean
  accountManager: string
  isHidden?: boolean
  geolocation: Geolocation
  branchName?: string
  products: string[]
  productsWithLongDelivery: number
  scanCommission: number
  address: string
  outOfStock: number
  coordinates: Coordinates
  paymentType: string
  referral: string[]
  deliveryRules: DeliveryRule[]
  maxDeliveryRange: number
  isOnlyQuik: boolean
  deliveryFactor: number
  radiusDistance: number
  affiliate: Affiliate
  paysFee: boolean
  logo: string
  marketing: Banner[]
}
