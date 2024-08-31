export interface IndustryIdentifier {
    type: string;
    identifier: string;
}

export interface ReadingModes {
    text: boolean;
    image: boolean;
}

export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

export interface VolumeInfo {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
}

export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
        isAvailable: boolean;
    };
    pdf: {
        isAvailable: boolean;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface SearchInfo {
    textSnippet: string;
}

export interface Book {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
}

export type RelatedBooksPropsType = {
    relatedBooks: Book[]
    prevBooksHandler: any
    nextBooksHandler: any
    currentIndex: number
    length: number
    showLoader: boolean
    handlePrevNextClick: (fn:()=> void) => void
}