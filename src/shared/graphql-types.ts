/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchToDos
// ====================================================

export interface FetchToDos_toDosList_items {
  __typename: "ToDo";
  id: string | null;
  identifier: number | null;
  title: string | null;
  description: string | null;
  finished: boolean | null;
  createdAt: any | null;
}

export interface FetchToDos_toDosList {
  __typename: "ToDoListResponse";
  /**
   * List items count
   */
  count: number;
  /**
   * List items
   */
  items: FetchToDos_toDosList_items[];
}

export interface FetchToDos {
  toDosList: FetchToDos_toDosList;
}

export interface FetchToDosVariables {
  filter?: ToDoFilter | null;
  first?: number | null;
  skip?: number | null;
  sort?: ToDoSort[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Relative Date Predicate Operation Enum
 */
export enum RelativePredicateOpEnum {
  ADD = "ADD",
  SUB = "SUB",
}

/**
 * Relative Date Predicate Unit Enum
 */
export enum RelativePredicateUnitEnum {
  DAY = "DAY",
  DAY_HOUR = "DAY_HOUR",
  DAY_MICROSECOND = "DAY_MICROSECOND",
  DAY_MINUTE = "DAY_MINUTE",
  DAY_SECOND = "DAY_SECOND",
  HOUR = "HOUR",
  HOUR_MICROSECOND = "HOUR_MICROSECOND",
  HOUR_MINUTE = "HOUR_MINUTE",
  HOUR_SECOND = "HOUR_SECOND",
  MICROSECOND = "MICROSECOND",
  MINUTE = "MINUTE",
  MINUTE_MICROSECOND = "MINUTE_MICROSECOND",
  MINUTE_SECOND = "MINUTE_SECOND",
  MONTH = "MONTH",
  QUARTER = "QUARTER",
  SECOND = "SECOND",
  SECOND_MICROSECOND = "SECOND_MICROSECOND",
  WEEK = "WEEK",
  YEAR = "YEAR",
  YEAR_MONTH = "YEAR_MONTH",
}

/**
 * SortOrder
 */
export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface ApiTokenFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  _fullText?: string | null;
  token?: StringPredicate | null;
  createdBy?: UserFilter | null;
  roles?: RoleRelationFilter | null;
  AND?: ApiTokenFilter[] | null;
  OR?: ApiTokenFilter[] | null;
}

export interface ApiTokenRelationFilter {
  some?: ApiTokenFilter | null;
  every?: ApiTokenFilter | null;
  none?: ApiTokenFilter | null;
}

export interface AuthenticationProfileFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  type?: StringPredicate | null;
  secret?: StringPredicate | null;
  managementDomain?: StringPredicate | null;
  clientId?: StringPredicate | null;
  databaseName?: StringPredicate | null;
  domain?: StringPredicate | null;
  selfSignUpEnabled?: BoolPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  roles?: RoleRelationFilter | null;
  AND?: AuthenticationProfileFilter[] | null;
  OR?: AuthenticationProfileFilter[] | null;
}

export interface AuthenticationProfileRelationFilter {
  some?: AuthenticationProfileFilter | null;
  every?: AuthenticationProfileFilter | null;
  none?: AuthenticationProfileFilter | null;
}

export interface BoolPredicate {
  equals?: boolean | null;
  not_equals?: boolean | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
}

export interface DateRelativePredicateType {
  op?: RelativePredicateOpEnum | null;
  unit?: RelativePredicateUnitEnum | null;
  value: string;
}

export interface DateRelativePredicates {
  lt?: DateRelativePredicateType | null;
  lte?: DateRelativePredicateType | null;
  gt?: DateRelativePredicateType | null;
  gte?: DateRelativePredicateType | null;
}

export interface DateTimePredicate {
  equals?: any | null;
  not_equals?: any | null;
  in?: any[] | null;
  not_in?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
  relative?: DateRelativePredicates | null;
}

export interface FileFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  fileId?: StringPredicate | null;
  downloadUrl?: StringPredicate | null;
  shareUrl?: StringPredicate | null;
  provider?: StringPredicate | null;
  public?: BoolPredicate | null;
  uploaded?: BoolPredicate | null;
  filename?: StringPredicate | null;
  uploadUrl?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  settings_menuBarLogo?: SettingRelationFilter | null;
  settings_landingPageImage?: SettingRelationFilter | null;
  users_avatar?: UserRelationFilter | null;
  teamMembers_avatar?: TeamMemberRelationFilter | null;
  AND?: FileFilter[] | null;
  OR?: FileFilter[] | null;
}

export interface FileSort {
  id?: SortOrder | null;
  createdAt?: SortOrder | null;
  updatedAt?: SortOrder | null;
  deletedAt?: SortOrder | null;
  fileId?: SortOrder | null;
  downloadUrl?: SortOrder | null;
  shareUrl?: SortOrder | null;
  provider?: SortOrder | null;
  public?: SortOrder | null;
  uploaded?: SortOrder | null;
  filename?: SortOrder | null;
  uploadUrl?: SortOrder | null;
  createdBy?: UserSort | null;
}

export interface IDPredicate {
  equals?: string | null;
  not_equals?: string | null;
  in?: string[] | null;
  not_in?: string[] | null;
  contains?: string | null;
  not_contains?: string | null;
  starts_with?: string | null;
  not_starts_with?: string | null;
  ends_with?: string | null;
  not_ends_with?: string | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
}

export interface IntPredicate {
  equals?: number | null;
  not_equals?: number | null;
  in?: number[] | null;
  not_in?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
}

export interface PermissionFilter {
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  appId?: StringPredicate | null;
  resourceType?: StringPredicate | null;
  resource?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  role?: RoleFilter | null;
  AND?: PermissionFilter[] | null;
  OR?: PermissionFilter[] | null;
}

export interface PermissionRelationFilter {
  some?: PermissionFilter | null;
  every?: PermissionFilter | null;
  none?: PermissionFilter | null;
}

export interface RoleFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  name?: StringPredicate | null;
  description?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  users?: UserRelationFilter | null;
  permissions?: PermissionRelationFilter | null;
  apiTokens?: ApiTokenRelationFilter | null;
  authenticationProfiles?: AuthenticationProfileRelationFilter | null;
  teamMembers?: TeamMemberRelationFilter | null;
  AND?: RoleFilter[] | null;
  OR?: RoleFilter[] | null;
}

export interface RoleRelationFilter {
  some?: RoleFilter | null;
  every?: RoleFilter | null;
  none?: RoleFilter | null;
}

export interface SettingFilter {
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  passwordMinLength?: IntPredicate | null;
  passwordRequireNumbers?: BoolPredicate | null;
  passwordRequireSpecial?: BoolPredicate | null;
  passwordRequireUppercase?: BoolPredicate | null;
  passwordRequireLowercase?: BoolPredicate | null;
  passwordUpdateInterval?: IntPredicate | null;
  rememberDevice?: StringPredicate | null;
  language?: StringPredicate | null;
  dateFormat?: StringPredicate | null;
  currency?: StringPredicate | null;
  timezone?: StringPredicate | null;
  vanityUrl?: StringPredicate | null;
  buttonLinkColor?: StringPredicate | null;
  userInterfaceStyle?: StringPredicate | null;
  menuBarBGColor?: StringPredicate | null;
  menuBarIconsColor?: StringPredicate | null;
  bgColor?: StringPredicate | null;
  containerColor?: StringPredicate | null;
  leftNavColor?: StringPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  menuBarLogo?: FileFilter | null;
  landingPageImage?: FileFilter | null;
  AND?: SettingFilter[] | null;
  OR?: SettingFilter[] | null;
}

export interface SettingRelationFilter {
  some?: SettingFilter | null;
  every?: SettingFilter | null;
  none?: SettingFilter | null;
}

export interface StringPredicate {
  equals?: string | null;
  not_equals?: string | null;
  in?: string[] | null;
  not_in?: string[] | null;
  contains?: string | null;
  not_contains?: string | null;
  starts_with?: string | null;
  not_starts_with?: string | null;
  ends_with?: string | null;
  not_ends_with?: string | null;
  is_empty?: boolean | null;
  is_not_empty?: boolean | null;
}

export interface TeamInvitationFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  uuid?: StringPredicate | null;
  email?: StringPredicate | null;
  firstName?: StringPredicate | null;
  lastName?: StringPredicate | null;
  resentOn?: DateTimePredicate | null;
  accepted?: BoolPredicate | null;
  acceptedOn?: DateTimePredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  invitee?: TeamMemberFilter | null;
  invitedBy?: TeamMemberFilter | null;
  AND?: TeamInvitationFilter[] | null;
  OR?: TeamInvitationFilter[] | null;
}

export interface TeamInvitationRelationFilter {
  some?: TeamInvitationFilter | null;
  every?: TeamInvitationFilter | null;
  none?: TeamInvitationFilter | null;
}

export interface TeamMemberFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  status?: StringPredicate | null;
  isOwner?: BoolPredicate | null;
  _fullText?: string | null;
  is_self?: boolean | null;
  not_self?: boolean | null;
  createdBy?: UserFilter | null;
  user?: UserFilter | null;
  avatar?: FileFilter | null;
  roles?: RoleRelationFilter | null;
  receivedTeamInvitations?: TeamInvitationRelationFilter | null;
  sentTeamInvitations?: TeamInvitationRelationFilter | null;
  AND?: TeamMemberFilter[] | null;
  OR?: TeamMemberFilter[] | null;
}

export interface TeamMemberRelationFilter {
  some?: TeamMemberFilter | null;
  every?: TeamMemberFilter | null;
  none?: TeamMemberFilter | null;
}

export interface ToDoFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  identifier?: IntPredicate | null;
  title?: StringPredicate | null;
  description?: StringPredicate | null;
  finished?: BoolPredicate | null;
  _fullText?: string | null;
  createdBy?: UserFilter | null;
  AND?: ToDoFilter[] | null;
  OR?: ToDoFilter[] | null;
}

export interface ToDoSort {
  id?: SortOrder | null;
  createdAt?: SortOrder | null;
  updatedAt?: SortOrder | null;
  deletedAt?: SortOrder | null;
  identifier?: SortOrder | null;
  title?: SortOrder | null;
  description?: SortOrder | null;
  finished?: SortOrder | null;
  createdBy?: UserSort | null;
}

export interface UserFilter {
  id?: IDPredicate | null;
  createdAt?: DateTimePredicate | null;
  updatedAt?: DateTimePredicate | null;
  deletedAt?: IntPredicate | null;
  email?: StringPredicate | null;
  status?: StringPredicate | null;
  origin?: StringPredicate | null;
  is8base?: BoolPredicate | null;
  firstName?: StringPredicate | null;
  lastName?: StringPredicate | null;
  timezone?: StringPredicate | null;
  _fullText?: string | null;
  is_self?: boolean | null;
  not_self?: boolean | null;
  createdBy?: UserFilter | null;
  avatar?: FileFilter | null;
  roles?: RoleRelationFilter | null;
  AND?: UserFilter[] | null;
  OR?: UserFilter[] | null;
}

export interface UserRelationFilter {
  some?: UserFilter | null;
  every?: UserFilter | null;
  none?: UserFilter | null;
}

export interface UserSort {
  id?: SortOrder | null;
  createdAt?: SortOrder | null;
  updatedAt?: SortOrder | null;
  deletedAt?: SortOrder | null;
  email?: SortOrder | null;
  status?: SortOrder | null;
  origin?: SortOrder | null;
  is8base?: SortOrder | null;
  firstName?: SortOrder | null;
  lastName?: SortOrder | null;
  timezone?: SortOrder | null;
  createdBy?: UserSort | null;
  avatar?: FileSort | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
