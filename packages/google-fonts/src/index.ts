type Variants = Record<
  string,
  {
    weights: string;
    subsets: string;
  }
>;

export type FontInfo = {
  fontFamily: string;
  importName: string;
  version: string;
  url: string;
  unicodeRanges: Record<string, string>;
  fonts: Record<string, Record<string, Record<string, string>>>;
};

export type GoogleFont = {
  getInfo: () => FontInfo;
  fontFamily: string;
  loadFont: <T extends keyof Variants>(
    style?: T | undefined,
    options?:
      | {
          weights?: Variants[T]['weights'][] | undefined;
          subsets?: Variants[T]['subsets'][] | undefined;
          document?: Document | undefined;
        }
      | undefined,
  ) => {
    fontFamily: string;
    fonts: Record<string, Record<string, Record<string, string>>>;
    unicodeRanges: Record<string, string>;
  };
};

export const getAvailableFonts = () => [
  {
    fontFamily: 'ABeeZee',
    importName: 'ABeeZee',
    load: () => import('./ABeeZee') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'ADLaM Display',
    importName: 'ADLaMDisplay',
    load: () => import('./ADLaMDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'AR One Sans',
    importName: 'AROneSans',
    load: () => import('./AROneSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Abel',
    importName: 'Abel',
    load: () => import('./Abel') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Abhaya Libre',
    importName: 'AbhayaLibre',
    load: () => import('./AbhayaLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Aboreto',
    importName: 'Aboreto',
    load: () => import('./Aboreto') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Abril Fatface',
    importName: 'AbrilFatface',
    load: () => import('./AbrilFatface') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Abyssinica SIL',
    importName: 'AbyssinicaSIL',
    load: () => import('./AbyssinicaSIL') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Aclonica',
    importName: 'Aclonica',
    load: () => import('./Aclonica') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Acme',
    importName: 'Acme',
    load: () => import('./Acme') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Actor',
    importName: 'Actor',
    load: () => import('./Actor') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Adamina',
    importName: 'Adamina',
    load: () => import('./Adamina') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Advent Pro',
    importName: 'AdventPro',
    load: () => import('./AdventPro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Agbalumo',
    importName: 'Agbalumo',
    load: () => import('./Agbalumo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Agdasima',
    importName: 'Agdasima',
    load: () => import('./Agdasima') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Aguafina Script',
    importName: 'AguafinaScript',
    load: () => import('./AguafinaScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Akatab',
    importName: 'Akatab',
    load: () => import('./Akatab') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Akaya Kanadaka',
    importName: 'AkayaKanadaka',
    load: () => import('./AkayaKanadaka') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Akaya Telivigala',
    importName: 'AkayaTelivigala',
    load: () => import('./AkayaTelivigala') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Akronim',
    importName: 'Akronim',
    load: () => import('./Akronim') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Akshar',
    importName: 'Akshar',
    load: () => import('./Akshar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Aladin',
    importName: 'Aladin',
    load: () => import('./Aladin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alata',
    importName: 'Alata',
    load: () => import('./Alata') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alatsi',
    importName: 'Alatsi',
    load: () => import('./Alatsi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Albert Sans',
    importName: 'AlbertSans',
    load: () => import('./AlbertSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Aldrich',
    importName: 'Aldrich',
    load: () => import('./Aldrich') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alef',
    importName: 'Alef',
    load: () => import('./Alef') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alegreya',
    importName: 'Alegreya',
    load: () => import('./Alegreya') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alegreya SC',
    importName: 'AlegreyaSC',
    load: () => import('./AlegreyaSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alegreya Sans',
    importName: 'AlegreyaSans',
    load: () => import('./AlegreyaSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alegreya Sans SC',
    importName: 'AlegreyaSansSC',
    load: () => import('./AlegreyaSansSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Aleo',
    importName: 'Aleo',
    load: () => import('./Aleo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alex Brush',
    importName: 'AlexBrush',
    load: () => import('./AlexBrush') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alexandria',
    importName: 'Alexandria',
    load: () => import('./Alexandria') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alfa Slab One',
    importName: 'AlfaSlabOne',
    load: () => import('./AlfaSlabOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alice',
    importName: 'Alice',
    load: () => import('./Alice') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alike',
    importName: 'Alike',
    load: () => import('./Alike') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alike Angular',
    importName: 'AlikeAngular',
    load: () => import('./AlikeAngular') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alkalami',
    importName: 'Alkalami',
    load: () => import('./Alkalami') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alkatra',
    importName: 'Alkatra',
    load: () => import('./Alkatra') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Allan',
    importName: 'Allan',
    load: () => import('./Allan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Allerta',
    importName: 'Allerta',
    load: () => import('./Allerta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Allerta Stencil',
    importName: 'AllertaStencil',
    load: () => import('./AllertaStencil') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Allison',
    importName: 'Allison',
    load: () => import('./Allison') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Allura',
    importName: 'Allura',
    load: () => import('./Allura') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Almarai',
    importName: 'Almarai',
    load: () => import('./Almarai') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Almendra',
    importName: 'Almendra',
    load: () => import('./Almendra') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Almendra Display',
    importName: 'AlmendraDisplay',
    load: () => import('./AlmendraDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Almendra SC',
    importName: 'AlmendraSC',
    load: () => import('./AlmendraSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alumni Sans',
    importName: 'AlumniSans',
    load: () => import('./AlumniSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alumni Sans Collegiate One',
    importName: 'AlumniSansCollegiateOne',
    load: () => import('./AlumniSansCollegiateOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alumni Sans Inline One',
    importName: 'AlumniSansInlineOne',
    load: () => import('./AlumniSansInlineOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Alumni Sans Pinstripe',
    importName: 'AlumniSansPinstripe',
    load: () => import('./AlumniSansPinstripe') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Amarante',
    importName: 'Amarante',
    load: () => import('./Amarante') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Amaranth',
    importName: 'Amaranth',
    load: () => import('./Amaranth') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Amatic SC',
    importName: 'AmaticSC',
    load: () => import('./AmaticSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Amethysta',
    importName: 'Amethysta',
    load: () => import('./Amethysta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Amiko',
    importName: 'Amiko',
    load: () => import('./Amiko') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Amiri',
    importName: 'Amiri',
    load: () => import('./Amiri') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Amiri Quran',
    importName: 'AmiriQuran',
    load: () => import('./AmiriQuran') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Amita',
    importName: 'Amita',
    load: () => import('./Amita') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anaheim',
    importName: 'Anaheim',
    load: () => import('./Anaheim') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Andada Pro',
    importName: 'AndadaPro',
    load: () => import('./AndadaPro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Andika',
    importName: 'Andika',
    load: () => import('./Andika') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anek Bangla',
    importName: 'AnekBangla',
    load: () => import('./AnekBangla') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anek Devanagari',
    importName: 'AnekDevanagari',
    load: () => import('./AnekDevanagari') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anek Gujarati',
    importName: 'AnekGujarati',
    load: () => import('./AnekGujarati') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anek Gurmukhi',
    importName: 'AnekGurmukhi',
    load: () => import('./AnekGurmukhi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anek Kannada',
    importName: 'AnekKannada',
    load: () => import('./AnekKannada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anek Latin',
    importName: 'AnekLatin',
    load: () => import('./AnekLatin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anek Malayalam',
    importName: 'AnekMalayalam',
    load: () => import('./AnekMalayalam') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anek Odia',
    importName: 'AnekOdia',
    load: () => import('./AnekOdia') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anek Tamil',
    importName: 'AnekTamil',
    load: () => import('./AnekTamil') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anek Telugu',
    importName: 'AnekTelugu',
    load: () => import('./AnekTelugu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Angkor',
    importName: 'Angkor',
    load: () => import('./Angkor') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Annie Use Your Telescope',
    importName: 'AnnieUseYourTelescope',
    load: () => import('./AnnieUseYourTelescope') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anonymous Pro',
    importName: 'AnonymousPro',
    load: () => import('./AnonymousPro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Antic',
    importName: 'Antic',
    load: () => import('./Antic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Antic Didone',
    importName: 'AnticDidone',
    load: () => import('./AnticDidone') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Antic Slab',
    importName: 'AnticSlab',
    load: () => import('./AnticSlab') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anton',
    importName: 'Anton',
    load: () => import('./Anton') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Antonio',
    importName: 'Antonio',
    load: () => import('./Antonio') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anuphan',
    importName: 'Anuphan',
    load: () => import('./Anuphan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Anybody',
    importName: 'Anybody',
    load: () => import('./Anybody') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Aoboshi One',
    importName: 'AoboshiOne',
    load: () => import('./AoboshiOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Arapey',
    importName: 'Arapey',
    load: () => import('./Arapey') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Arbutus',
    importName: 'Arbutus',
    load: () => import('./Arbutus') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Arbutus Slab',
    importName: 'ArbutusSlab',
    load: () => import('./ArbutusSlab') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Architects Daughter',
    importName: 'ArchitectsDaughter',
    load: () => import('./ArchitectsDaughter') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Archivo',
    importName: 'Archivo',
    load: () => import('./Archivo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Archivo Black',
    importName: 'ArchivoBlack',
    load: () => import('./ArchivoBlack') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Archivo Narrow',
    importName: 'ArchivoNarrow',
    load: () => import('./ArchivoNarrow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Are You Serious',
    importName: 'AreYouSerious',
    load: () => import('./AreYouSerious') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Aref Ruqaa',
    importName: 'ArefRuqaa',
    load: () => import('./ArefRuqaa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Aref Ruqaa Ink',
    importName: 'ArefRuqaaInk',
    load: () => import('./ArefRuqaaInk') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Arima',
    importName: 'Arima',
    load: () => import('./Arima') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Arimo',
    importName: 'Arimo',
    load: () => import('./Arimo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Arizonia',
    importName: 'Arizonia',
    load: () => import('./Arizonia') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Armata',
    importName: 'Armata',
    load: () => import('./Armata') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Arsenal',
    importName: 'Arsenal',
    load: () => import('./Arsenal') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Artifika',
    importName: 'Artifika',
    load: () => import('./Artifika') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Arvo',
    importName: 'Arvo',
    load: () => import('./Arvo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Arya',
    importName: 'Arya',
    load: () => import('./Arya') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Asap',
    importName: 'Asap',
    load: () => import('./Asap') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Asap Condensed',
    importName: 'AsapCondensed',
    load: () => import('./AsapCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Asar',
    importName: 'Asar',
    load: () => import('./Asar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Asset',
    importName: 'Asset',
    load: () => import('./Asset') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Assistant',
    importName: 'Assistant',
    load: () => import('./Assistant') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Astloch',
    importName: 'Astloch',
    load: () => import('./Astloch') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Asul',
    importName: 'Asul',
    load: () => import('./Asul') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Athiti',
    importName: 'Athiti',
    load: () => import('./Athiti') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Atkinson Hyperlegible',
    importName: 'AtkinsonHyperlegible',
    load: () => import('./AtkinsonHyperlegible') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Atma',
    importName: 'Atma',
    load: () => import('./Atma') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Atomic Age',
    importName: 'AtomicAge',
    load: () => import('./AtomicAge') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Aubrey',
    importName: 'Aubrey',
    load: () => import('./Aubrey') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Audiowide',
    importName: 'Audiowide',
    load: () => import('./Audiowide') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Autour One',
    importName: 'AutourOne',
    load: () => import('./AutourOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Average',
    importName: 'Average',
    load: () => import('./Average') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Average Sans',
    importName: 'AverageSans',
    load: () => import('./AverageSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Averia Gruesa Libre',
    importName: 'AveriaGruesaLibre',
    load: () => import('./AveriaGruesaLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Averia Libre',
    importName: 'AveriaLibre',
    load: () => import('./AveriaLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Averia Sans Libre',
    importName: 'AveriaSansLibre',
    load: () => import('./AveriaSansLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Averia Serif Libre',
    importName: 'AveriaSerifLibre',
    load: () => import('./AveriaSerifLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Azeret Mono',
    importName: 'AzeretMono',
    load: () => import('./AzeretMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'B612',
    importName: 'B612',
    load: () => import('./B612') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'B612 Mono',
    importName: 'B612Mono',
    load: () => import('./B612Mono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'BIZ UDGothic',
    importName: 'BIZUDGothic',
    load: () => import('./BIZUDGothic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'BIZ UDMincho',
    importName: 'BIZUDMincho',
    load: () => import('./BIZUDMincho') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'BIZ UDPGothic',
    importName: 'BIZUDPGothic',
    load: () => import('./BIZUDPGothic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'BIZ UDPMincho',
    importName: 'BIZUDPMincho',
    load: () => import('./BIZUDPMincho') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Babylonica',
    importName: 'Babylonica',
    load: () => import('./Babylonica') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bacasime Antique',
    importName: 'BacasimeAntique',
    load: () => import('./BacasimeAntique') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bad Script',
    importName: 'BadScript',
    load: () => import('./BadScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bagel Fat One',
    importName: 'BagelFatOne',
    load: () => import('./BagelFatOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bahiana',
    importName: 'Bahiana',
    load: () => import('./Bahiana') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bahianita',
    importName: 'Bahianita',
    load: () => import('./Bahianita') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bai Jamjuree',
    importName: 'BaiJamjuree',
    load: () => import('./BaiJamjuree') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bakbak One',
    importName: 'BakbakOne',
    load: () => import('./BakbakOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ballet',
    importName: 'Ballet',
    load: () => import('./Ballet') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baloo 2',
    importName: 'Baloo2',
    load: () => import('./Baloo2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baloo Bhai 2',
    importName: 'BalooBhai2',
    load: () => import('./BalooBhai2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baloo Bhaijaan 2',
    importName: 'BalooBhaijaan2',
    load: () => import('./BalooBhaijaan2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baloo Bhaina 2',
    importName: 'BalooBhaina2',
    load: () => import('./BalooBhaina2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baloo Chettan 2',
    importName: 'BalooChettan2',
    load: () => import('./BalooChettan2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baloo Da 2',
    importName: 'BalooDa2',
    load: () => import('./BalooDa2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baloo Paaji 2',
    importName: 'BalooPaaji2',
    load: () => import('./BalooPaaji2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baloo Tamma 2',
    importName: 'BalooTamma2',
    load: () => import('./BalooTamma2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baloo Tammudu 2',
    importName: 'BalooTammudu2',
    load: () => import('./BalooTammudu2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baloo Thambi 2',
    importName: 'BalooThambi2',
    load: () => import('./BalooThambi2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Balsamiq Sans',
    importName: 'BalsamiqSans',
    load: () => import('./BalsamiqSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Balthazar',
    importName: 'Balthazar',
    load: () => import('./Balthazar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bangers',
    importName: 'Bangers',
    load: () => import('./Bangers') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Barlow',
    importName: 'Barlow',
    load: () => import('./Barlow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Barlow Condensed',
    importName: 'BarlowCondensed',
    load: () => import('./BarlowCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Barlow Semi Condensed',
    importName: 'BarlowSemiCondensed',
    load: () => import('./BarlowSemiCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Barriecito',
    importName: 'Barriecito',
    load: () => import('./Barriecito') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Barrio',
    importName: 'Barrio',
    load: () => import('./Barrio') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Basic',
    importName: 'Basic',
    load: () => import('./Basic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baskervville',
    importName: 'Baskervville',
    load: () => import('./Baskervville') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Battambang',
    importName: 'Battambang',
    load: () => import('./Battambang') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Baumans',
    importName: 'Baumans',
    load: () => import('./Baumans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bayon',
    importName: 'Bayon',
    load: () => import('./Bayon') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Be Vietnam Pro',
    importName: 'BeVietnamPro',
    load: () => import('./BeVietnamPro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Beau Rivage',
    importName: 'BeauRivage',
    load: () => import('./BeauRivage') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bebas Neue',
    importName: 'BebasNeue',
    load: () => import('./BebasNeue') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Belanosima',
    importName: 'Belanosima',
    load: () => import('./Belanosima') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Belgrano',
    importName: 'Belgrano',
    load: () => import('./Belgrano') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bellefair',
    importName: 'Bellefair',
    load: () => import('./Bellefair') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Belleza',
    importName: 'Belleza',
    load: () => import('./Belleza') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bellota',
    importName: 'Bellota',
    load: () => import('./Bellota') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bellota Text',
    importName: 'BellotaText',
    load: () => import('./BellotaText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'BenchNine',
    importName: 'BenchNine',
    load: () => import('./BenchNine') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Benne',
    importName: 'Benne',
    load: () => import('./Benne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bentham',
    importName: 'Bentham',
    load: () => import('./Bentham') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Berkshire Swash',
    importName: 'BerkshireSwash',
    load: () => import('./BerkshireSwash') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Besley',
    importName: 'Besley',
    load: () => import('./Besley') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Beth Ellen',
    importName: 'BethEllen',
    load: () => import('./BethEllen') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bevan',
    importName: 'Bevan',
    load: () => import('./Bevan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'BhuTuka Expanded One',
    importName: 'BhuTukaExpandedOne',
    load: () => import('./BhuTukaExpandedOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Big Shoulders Display',
    importName: 'BigShouldersDisplay',
    load: () => import('./BigShouldersDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Big Shoulders Inline Display',
    importName: 'BigShouldersInlineDisplay',
    load: () => import('./BigShouldersInlineDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Big Shoulders Inline Text',
    importName: 'BigShouldersInlineText',
    load: () => import('./BigShouldersInlineText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Big Shoulders Stencil Display',
    importName: 'BigShouldersStencilDisplay',
    load: () => import('./BigShouldersStencilDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Big Shoulders Stencil Text',
    importName: 'BigShouldersStencilText',
    load: () => import('./BigShouldersStencilText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Big Shoulders Text',
    importName: 'BigShouldersText',
    load: () => import('./BigShouldersText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bigelow Rules',
    importName: 'BigelowRules',
    load: () => import('./BigelowRules') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bigshot One',
    importName: 'BigshotOne',
    load: () => import('./BigshotOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bilbo',
    importName: 'Bilbo',
    load: () => import('./Bilbo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bilbo Swash Caps',
    importName: 'BilboSwashCaps',
    load: () => import('./BilboSwashCaps') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'BioRhyme',
    importName: 'BioRhyme',
    load: () => import('./BioRhyme') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'BioRhyme Expanded',
    importName: 'BioRhymeExpanded',
    load: () => import('./BioRhymeExpanded') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Birthstone',
    importName: 'Birthstone',
    load: () => import('./Birthstone') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Birthstone Bounce',
    importName: 'BirthstoneBounce',
    load: () => import('./BirthstoneBounce') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Biryani',
    importName: 'Biryani',
    load: () => import('./Biryani') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bitter',
    importName: 'Bitter',
    load: () => import('./Bitter') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Black And White Picture',
    importName: 'BlackAndWhitePicture',
    load: () => import('./BlackAndWhitePicture') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Black Han Sans',
    importName: 'BlackHanSans',
    load: () => import('./BlackHanSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Black Ops One',
    importName: 'BlackOpsOne',
    load: () => import('./BlackOpsOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Blaka',
    importName: 'Blaka',
    load: () => import('./Blaka') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Blaka Hollow',
    importName: 'BlakaHollow',
    load: () => import('./BlakaHollow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Blaka Ink',
    importName: 'BlakaInk',
    load: () => import('./BlakaInk') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Blinker',
    importName: 'Blinker',
    load: () => import('./Blinker') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bodoni Moda',
    importName: 'BodoniModa',
    load: () => import('./BodoniModa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bokor',
    importName: 'Bokor',
    load: () => import('./Bokor') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bona Nova',
    importName: 'BonaNova',
    load: () => import('./BonaNova') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bonbon',
    importName: 'Bonbon',
    load: () => import('./Bonbon') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bonheur Royale',
    importName: 'BonheurRoyale',
    load: () => import('./BonheurRoyale') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Boogaloo',
    importName: 'Boogaloo',
    load: () => import('./Boogaloo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Borel',
    importName: 'Borel',
    load: () => import('./Borel') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bowlby One',
    importName: 'BowlbyOne',
    load: () => import('./BowlbyOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bowlby One SC',
    importName: 'BowlbyOneSC',
    load: () => import('./BowlbyOneSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Braah One',
    importName: 'BraahOne',
    load: () => import('./BraahOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Brawler',
    importName: 'Brawler',
    load: () => import('./Brawler') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bree Serif',
    importName: 'BreeSerif',
    load: () => import('./BreeSerif') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bricolage Grotesque',
    importName: 'BricolageGrotesque',
    load: () => import('./BricolageGrotesque') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bruno Ace',
    importName: 'BrunoAce',
    load: () => import('./BrunoAce') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bruno Ace SC',
    importName: 'BrunoAceSC',
    load: () => import('./BrunoAceSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Brygada 1918',
    importName: 'Brygada1918',
    load: () => import('./Brygada1918') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bubblegum Sans',
    importName: 'BubblegumSans',
    load: () => import('./BubblegumSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bubbler One',
    importName: 'BubblerOne',
    load: () => import('./BubblerOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Buda',
    importName: 'Buda',
    load: () => import('./Buda') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Buenard',
    importName: 'Buenard',
    load: () => import('./Buenard') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bungee',
    importName: 'Bungee',
    load: () => import('./Bungee') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bungee Hairline',
    importName: 'BungeeHairline',
    load: () => import('./BungeeHairline') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bungee Inline',
    importName: 'BungeeInline',
    load: () => import('./BungeeInline') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bungee Outline',
    importName: 'BungeeOutline',
    load: () => import('./BungeeOutline') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bungee Shade',
    importName: 'BungeeShade',
    load: () => import('./BungeeShade') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Bungee Spice',
    importName: 'BungeeSpice',
    load: () => import('./BungeeSpice') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Butcherman',
    importName: 'Butcherman',
    load: () => import('./Butcherman') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Butterfly Kids',
    importName: 'ButterflyKids',
    load: () => import('./ButterflyKids') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cabin',
    importName: 'Cabin',
    load: () => import('./Cabin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cabin Condensed',
    importName: 'CabinCondensed',
    load: () => import('./CabinCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cabin Sketch',
    importName: 'CabinSketch',
    load: () => import('./CabinSketch') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Caesar Dressing',
    importName: 'CaesarDressing',
    load: () => import('./CaesarDressing') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cagliostro',
    importName: 'Cagliostro',
    load: () => import('./Cagliostro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cairo',
    importName: 'Cairo',
    load: () => import('./Cairo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cairo Play',
    importName: 'CairoPlay',
    load: () => import('./CairoPlay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Caladea',
    importName: 'Caladea',
    load: () => import('./Caladea') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Calistoga',
    importName: 'Calistoga',
    load: () => import('./Calistoga') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Calligraffitti',
    importName: 'Calligraffitti',
    load: () => import('./Calligraffitti') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cambay',
    importName: 'Cambay',
    load: () => import('./Cambay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cambo',
    importName: 'Cambo',
    load: () => import('./Cambo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Candal',
    importName: 'Candal',
    load: () => import('./Candal') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cantarell',
    importName: 'Cantarell',
    load: () => import('./Cantarell') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cantata One',
    importName: 'CantataOne',
    load: () => import('./CantataOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cantora One',
    importName: 'CantoraOne',
    load: () => import('./CantoraOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Caprasimo',
    importName: 'Caprasimo',
    load: () => import('./Caprasimo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Capriola',
    importName: 'Capriola',
    load: () => import('./Capriola') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Caramel',
    importName: 'Caramel',
    load: () => import('./Caramel') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Carattere',
    importName: 'Carattere',
    load: () => import('./Carattere') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cardo',
    importName: 'Cardo',
    load: () => import('./Cardo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Carlito',
    importName: 'Carlito',
    load: () => import('./Carlito') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Carme',
    importName: 'Carme',
    load: () => import('./Carme') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Carrois Gothic',
    importName: 'CarroisGothic',
    load: () => import('./CarroisGothic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Carrois Gothic SC',
    importName: 'CarroisGothicSC',
    load: () => import('./CarroisGothicSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Carter One',
    importName: 'CarterOne',
    load: () => import('./CarterOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Castoro',
    importName: 'Castoro',
    load: () => import('./Castoro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Castoro Titling',
    importName: 'CastoroTitling',
    load: () => import('./CastoroTitling') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Catamaran',
    importName: 'Catamaran',
    load: () => import('./Catamaran') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Caudex',
    importName: 'Caudex',
    load: () => import('./Caudex') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Caveat',
    importName: 'Caveat',
    load: () => import('./Caveat') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Caveat Brush',
    importName: 'CaveatBrush',
    load: () => import('./CaveatBrush') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cedarville Cursive',
    importName: 'CedarvilleCursive',
    load: () => import('./CedarvilleCursive') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ceviche One',
    importName: 'CevicheOne',
    load: () => import('./CevicheOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chakra Petch',
    importName: 'ChakraPetch',
    load: () => import('./ChakraPetch') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Changa',
    importName: 'Changa',
    load: () => import('./Changa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Changa One',
    importName: 'ChangaOne',
    load: () => import('./ChangaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chango',
    importName: 'Chango',
    load: () => import('./Chango') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Charis SIL',
    importName: 'CharisSIL',
    load: () => import('./CharisSIL') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Charm',
    importName: 'Charm',
    load: () => import('./Charm') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Charmonman',
    importName: 'Charmonman',
    load: () => import('./Charmonman') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chathura',
    importName: 'Chathura',
    load: () => import('./Chathura') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chau Philomene One',
    importName: 'ChauPhilomeneOne',
    load: () => import('./ChauPhilomeneOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chela One',
    importName: 'ChelaOne',
    load: () => import('./ChelaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chelsea Market',
    importName: 'ChelseaMarket',
    load: () => import('./ChelseaMarket') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chenla',
    importName: 'Chenla',
    load: () => import('./Chenla') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cherish',
    importName: 'Cherish',
    load: () => import('./Cherish') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cherry Bomb One',
    importName: 'CherryBombOne',
    load: () => import('./CherryBombOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cherry Cream Soda',
    importName: 'CherryCreamSoda',
    load: () => import('./CherryCreamSoda') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cherry Swash',
    importName: 'CherrySwash',
    load: () => import('./CherrySwash') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chewy',
    importName: 'Chewy',
    load: () => import('./Chewy') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chicle',
    importName: 'Chicle',
    load: () => import('./Chicle') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chilanka',
    importName: 'Chilanka',
    load: () => import('./Chilanka') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chivo',
    importName: 'Chivo',
    load: () => import('./Chivo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chivo Mono',
    importName: 'ChivoMono',
    load: () => import('./ChivoMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chokokutai',
    importName: 'Chokokutai',
    load: () => import('./Chokokutai') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Chonburi',
    importName: 'Chonburi',
    load: () => import('./Chonburi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cinzel',
    importName: 'Cinzel',
    load: () => import('./Cinzel') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cinzel Decorative',
    importName: 'CinzelDecorative',
    load: () => import('./CinzelDecorative') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Clicker Script',
    importName: 'ClickerScript',
    load: () => import('./ClickerScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Climate Crisis',
    importName: 'ClimateCrisis',
    load: () => import('./ClimateCrisis') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Coda',
    importName: 'Coda',
    load: () => import('./Coda') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Codystar',
    importName: 'Codystar',
    load: () => import('./Codystar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Coiny',
    importName: 'Coiny',
    load: () => import('./Coiny') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Combo',
    importName: 'Combo',
    load: () => import('./Combo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Comfortaa',
    importName: 'Comfortaa',
    load: () => import('./Comfortaa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Comforter',
    importName: 'Comforter',
    load: () => import('./Comforter') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Comforter Brush',
    importName: 'ComforterBrush',
    load: () => import('./ComforterBrush') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Comic Neue',
    importName: 'ComicNeue',
    load: () => import('./ComicNeue') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Coming Soon',
    importName: 'ComingSoon',
    load: () => import('./ComingSoon') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Comme',
    importName: 'Comme',
    load: () => import('./Comme') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Commissioner',
    importName: 'Commissioner',
    load: () => import('./Commissioner') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Concert One',
    importName: 'ConcertOne',
    load: () => import('./ConcertOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Condiment',
    importName: 'Condiment',
    load: () => import('./Condiment') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Content',
    importName: 'Content',
    load: () => import('./Content') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Contrail One',
    importName: 'ContrailOne',
    load: () => import('./ContrailOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Convergence',
    importName: 'Convergence',
    load: () => import('./Convergence') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cookie',
    importName: 'Cookie',
    load: () => import('./Cookie') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Copse',
    importName: 'Copse',
    load: () => import('./Copse') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Corben',
    importName: 'Corben',
    load: () => import('./Corben') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Corinthia',
    importName: 'Corinthia',
    load: () => import('./Corinthia') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cormorant',
    importName: 'Cormorant',
    load: () => import('./Cormorant') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cormorant Garamond',
    importName: 'CormorantGaramond',
    load: () => import('./CormorantGaramond') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cormorant Infant',
    importName: 'CormorantInfant',
    load: () => import('./CormorantInfant') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cormorant SC',
    importName: 'CormorantSC',
    load: () => import('./CormorantSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cormorant Unicase',
    importName: 'CormorantUnicase',
    load: () => import('./CormorantUnicase') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cormorant Upright',
    importName: 'CormorantUpright',
    load: () => import('./CormorantUpright') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Courgette',
    importName: 'Courgette',
    load: () => import('./Courgette') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Courier Prime',
    importName: 'CourierPrime',
    load: () => import('./CourierPrime') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cousine',
    importName: 'Cousine',
    load: () => import('./Cousine') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Coustard',
    importName: 'Coustard',
    load: () => import('./Coustard') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Covered By Your Grace',
    importName: 'CoveredByYourGrace',
    load: () => import('./CoveredByYourGrace') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Crafty Girls',
    importName: 'CraftyGirls',
    load: () => import('./CraftyGirls') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Creepster',
    importName: 'Creepster',
    load: () => import('./Creepster') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Crete Round',
    importName: 'CreteRound',
    load: () => import('./CreteRound') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Crimson Pro',
    importName: 'CrimsonPro',
    load: () => import('./CrimsonPro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Crimson Text',
    importName: 'CrimsonText',
    load: () => import('./CrimsonText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Croissant One',
    importName: 'CroissantOne',
    load: () => import('./CroissantOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Crushed',
    importName: 'Crushed',
    load: () => import('./Crushed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cuprum',
    importName: 'Cuprum',
    load: () => import('./Cuprum') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cute Font',
    importName: 'CuteFont',
    load: () => import('./CuteFont') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cutive',
    importName: 'Cutive',
    load: () => import('./Cutive') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Cutive Mono',
    importName: 'CutiveMono',
    load: () => import('./CutiveMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'DM Mono',
    importName: 'DMMono',
    load: () => import('./DMMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'DM Sans',
    importName: 'DMSans',
    load: () => import('./DMSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'DM Serif Display',
    importName: 'DMSerifDisplay',
    load: () => import('./DMSerifDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'DM Serif Text',
    importName: 'DMSerifText',
    load: () => import('./DMSerifText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dai Banna SIL',
    importName: 'DaiBannaSIL',
    load: () => import('./DaiBannaSIL') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Damion',
    importName: 'Damion',
    load: () => import('./Damion') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dancing Script',
    importName: 'DancingScript',
    load: () => import('./DancingScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dangrek',
    importName: 'Dangrek',
    load: () => import('./Dangrek') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Darker Grotesque',
    importName: 'DarkerGrotesque',
    load: () => import('./DarkerGrotesque') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Darumadrop One',
    importName: 'DarumadropOne',
    load: () => import('./DarumadropOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'David Libre',
    importName: 'DavidLibre',
    load: () => import('./DavidLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dawning of a New Day',
    importName: 'DawningofaNewDay',
    load: () => import('./DawningofaNewDay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Days One',
    importName: 'DaysOne',
    load: () => import('./DaysOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dekko',
    importName: 'Dekko',
    load: () => import('./Dekko') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dela Gothic One',
    importName: 'DelaGothicOne',
    load: () => import('./DelaGothicOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Delicious Handrawn',
    importName: 'DeliciousHandrawn',
    load: () => import('./DeliciousHandrawn') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Delius',
    importName: 'Delius',
    load: () => import('./Delius') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Delius Swash Caps',
    importName: 'DeliusSwashCaps',
    load: () => import('./DeliusSwashCaps') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Delius Unicase',
    importName: 'DeliusUnicase',
    load: () => import('./DeliusUnicase') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Della Respira',
    importName: 'DellaRespira',
    load: () => import('./DellaRespira') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Denk One',
    importName: 'DenkOne',
    load: () => import('./DenkOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Devonshire',
    importName: 'Devonshire',
    load: () => import('./Devonshire') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dhurjati',
    importName: 'Dhurjati',
    load: () => import('./Dhurjati') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Didact Gothic',
    importName: 'DidactGothic',
    load: () => import('./DidactGothic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Diphylleia',
    importName: 'Diphylleia',
    load: () => import('./Diphylleia') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Diplomata',
    importName: 'Diplomata',
    load: () => import('./Diplomata') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Diplomata SC',
    importName: 'DiplomataSC',
    load: () => import('./DiplomataSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Do Hyeon',
    importName: 'DoHyeon',
    load: () => import('./DoHyeon') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dokdo',
    importName: 'Dokdo',
    load: () => import('./Dokdo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Domine',
    importName: 'Domine',
    load: () => import('./Domine') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Donegal One',
    importName: 'DonegalOne',
    load: () => import('./DonegalOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dongle',
    importName: 'Dongle',
    load: () => import('./Dongle') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Doppio One',
    importName: 'DoppioOne',
    load: () => import('./DoppioOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dorsa',
    importName: 'Dorsa',
    load: () => import('./Dorsa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dosis',
    importName: 'Dosis',
    load: () => import('./Dosis') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'DotGothic16',
    importName: 'DotGothic16',
    load: () => import('./DotGothic16') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dr Sugiyama',
    importName: 'DrSugiyama',
    load: () => import('./DrSugiyama') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Duru Sans',
    importName: 'DuruSans',
    load: () => import('./DuruSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'DynaPuff',
    importName: 'DynaPuff',
    load: () => import('./DynaPuff') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Dynalight',
    importName: 'Dynalight',
    load: () => import('./Dynalight') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'EB Garamond',
    importName: 'EBGaramond',
    load: () => import('./EBGaramond') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Eagle Lake',
    importName: 'EagleLake',
    load: () => import('./EagleLake') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'East Sea Dokdo',
    importName: 'EastSeaDokdo',
    load: () => import('./EastSeaDokdo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Eater',
    importName: 'Eater',
    load: () => import('./Eater') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Economica',
    importName: 'Economica',
    load: () => import('./Economica') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Eczar',
    importName: 'Eczar',
    load: () => import('./Eczar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Edu NSW ACT Foundation',
    importName: 'EduNSWACTFoundation',
    load: () => import('./EduNSWACTFoundation') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Edu QLD Beginner',
    importName: 'EduQLDBeginner',
    load: () => import('./EduQLDBeginner') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Edu SA Beginner',
    importName: 'EduSABeginner',
    load: () => import('./EduSABeginner') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Edu TAS Beginner',
    importName: 'EduTASBeginner',
    load: () => import('./EduTASBeginner') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Edu VIC WA NT Beginner',
    importName: 'EduVICWANTBeginner',
    load: () => import('./EduVICWANTBeginner') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'El Messiri',
    importName: 'ElMessiri',
    load: () => import('./ElMessiri') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Electrolize',
    importName: 'Electrolize',
    load: () => import('./Electrolize') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Elsie',
    importName: 'Elsie',
    load: () => import('./Elsie') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Elsie Swash Caps',
    importName: 'ElsieSwashCaps',
    load: () => import('./ElsieSwashCaps') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Emblema One',
    importName: 'EmblemaOne',
    load: () => import('./EmblemaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Emilys Candy',
    importName: 'EmilysCandy',
    load: () => import('./EmilysCandy') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Encode Sans',
    importName: 'EncodeSans',
    load: () => import('./EncodeSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Encode Sans Condensed',
    importName: 'EncodeSansCondensed',
    load: () => import('./EncodeSansCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Encode Sans Expanded',
    importName: 'EncodeSansExpanded',
    load: () => import('./EncodeSansExpanded') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Encode Sans SC',
    importName: 'EncodeSansSC',
    load: () => import('./EncodeSansSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Encode Sans Semi Condensed',
    importName: 'EncodeSansSemiCondensed',
    load: () => import('./EncodeSansSemiCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Encode Sans Semi Expanded',
    importName: 'EncodeSansSemiExpanded',
    load: () => import('./EncodeSansSemiExpanded') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Engagement',
    importName: 'Engagement',
    load: () => import('./Engagement') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Englebert',
    importName: 'Englebert',
    load: () => import('./Englebert') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Enriqueta',
    importName: 'Enriqueta',
    load: () => import('./Enriqueta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ephesis',
    importName: 'Ephesis',
    load: () => import('./Ephesis') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Epilogue',
    importName: 'Epilogue',
    load: () => import('./Epilogue') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Erica One',
    importName: 'EricaOne',
    load: () => import('./EricaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Esteban',
    importName: 'Esteban',
    load: () => import('./Esteban') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Estonia',
    importName: 'Estonia',
    load: () => import('./Estonia') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Euphoria Script',
    importName: 'EuphoriaScript',
    load: () => import('./EuphoriaScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ewert',
    importName: 'Ewert',
    load: () => import('./Ewert') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Exo',
    importName: 'Exo',
    load: () => import('./Exo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Exo 2',
    importName: 'Exo2',
    load: () => import('./Exo2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Expletus Sans',
    importName: 'ExpletusSans',
    load: () => import('./ExpletusSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Explora',
    importName: 'Explora',
    load: () => import('./Explora') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fahkwang',
    importName: 'Fahkwang',
    load: () => import('./Fahkwang') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Familjen Grotesk',
    importName: 'FamiljenGrotesk',
    load: () => import('./FamiljenGrotesk') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fanwood Text',
    importName: 'FanwoodText',
    load: () => import('./FanwoodText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Farro',
    importName: 'Farro',
    load: () => import('./Farro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Farsan',
    importName: 'Farsan',
    load: () => import('./Farsan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fascinate',
    importName: 'Fascinate',
    load: () => import('./Fascinate') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fascinate Inline',
    importName: 'FascinateInline',
    load: () => import('./FascinateInline') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Faster One',
    importName: 'FasterOne',
    load: () => import('./FasterOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fasthand',
    importName: 'Fasthand',
    load: () => import('./Fasthand') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fauna One',
    importName: 'FaunaOne',
    load: () => import('./FaunaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Faustina',
    importName: 'Faustina',
    load: () => import('./Faustina') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Federant',
    importName: 'Federant',
    load: () => import('./Federant') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Federo',
    importName: 'Federo',
    load: () => import('./Federo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Felipa',
    importName: 'Felipa',
    load: () => import('./Felipa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fenix',
    importName: 'Fenix',
    load: () => import('./Fenix') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Festive',
    importName: 'Festive',
    load: () => import('./Festive') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Figtree',
    importName: 'Figtree',
    load: () => import('./Figtree') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Finger Paint',
    importName: 'FingerPaint',
    load: () => import('./FingerPaint') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Finlandica',
    importName: 'Finlandica',
    load: () => import('./Finlandica') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fira Code',
    importName: 'FiraCode',
    load: () => import('./FiraCode') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fira Mono',
    importName: 'FiraMono',
    load: () => import('./FiraMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fira Sans',
    importName: 'FiraSans',
    load: () => import('./FiraSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fira Sans Condensed',
    importName: 'FiraSansCondensed',
    load: () => import('./FiraSansCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fira Sans Extra Condensed',
    importName: 'FiraSansExtraCondensed',
    load: () => import('./FiraSansExtraCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fjalla One',
    importName: 'FjallaOne',
    load: () => import('./FjallaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fjord One',
    importName: 'FjordOne',
    load: () => import('./FjordOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Flamenco',
    importName: 'Flamenco',
    load: () => import('./Flamenco') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Flavors',
    importName: 'Flavors',
    load: () => import('./Flavors') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fleur De Leah',
    importName: 'FleurDeLeah',
    load: () => import('./FleurDeLeah') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Flow Block',
    importName: 'FlowBlock',
    load: () => import('./FlowBlock') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Flow Circular',
    importName: 'FlowCircular',
    load: () => import('./FlowCircular') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Flow Rounded',
    importName: 'FlowRounded',
    load: () => import('./FlowRounded') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Foldit',
    importName: 'Foldit',
    load: () => import('./Foldit') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fondamento',
    importName: 'Fondamento',
    load: () => import('./Fondamento') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fontdiner Swanky',
    importName: 'FontdinerSwanky',
    load: () => import('./FontdinerSwanky') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Forum',
    importName: 'Forum',
    load: () => import('./Forum') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fragment Mono',
    importName: 'FragmentMono',
    load: () => import('./FragmentMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Francois One',
    importName: 'FrancoisOne',
    load: () => import('./FrancoisOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Frank Ruhl Libre',
    importName: 'FrankRuhlLibre',
    load: () => import('./FrankRuhlLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fraunces',
    importName: 'Fraunces',
    load: () => import('./Fraunces') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Freckle Face',
    importName: 'FreckleFace',
    load: () => import('./FreckleFace') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fredericka the Great',
    importName: 'FrederickatheGreat',
    load: () => import('./FrederickatheGreat') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fredoka',
    importName: 'Fredoka',
    load: () => import('./Fredoka') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Freehand',
    importName: 'Freehand',
    load: () => import('./Freehand') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fresca',
    importName: 'Fresca',
    load: () => import('./Fresca') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Frijole',
    importName: 'Frijole',
    load: () => import('./Frijole') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fruktur',
    importName: 'Fruktur',
    load: () => import('./Fruktur') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fugaz One',
    importName: 'FugazOne',
    load: () => import('./FugazOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fuggles',
    importName: 'Fuggles',
    load: () => import('./Fuggles') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Fuzzy Bubbles',
    importName: 'FuzzyBubbles',
    load: () => import('./FuzzyBubbles') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'GFS Didot',
    importName: 'GFSDidot',
    load: () => import('./GFSDidot') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'GFS Neohellenic',
    importName: 'GFSNeohellenic',
    load: () => import('./GFSNeohellenic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gabarito',
    importName: 'Gabarito',
    load: () => import('./Gabarito') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gabriela',
    importName: 'Gabriela',
    load: () => import('./Gabriela') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gaegu',
    importName: 'Gaegu',
    load: () => import('./Gaegu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gafata',
    importName: 'Gafata',
    load: () => import('./Gafata') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gajraj One',
    importName: 'GajrajOne',
    load: () => import('./GajrajOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Galada',
    importName: 'Galada',
    load: () => import('./Galada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Galdeano',
    importName: 'Galdeano',
    load: () => import('./Galdeano') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Galindo',
    importName: 'Galindo',
    load: () => import('./Galindo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gamja Flower',
    importName: 'GamjaFlower',
    load: () => import('./GamjaFlower') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gantari',
    importName: 'Gantari',
    load: () => import('./Gantari') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gasoek One',
    importName: 'GasoekOne',
    load: () => import('./GasoekOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gayathri',
    importName: 'Gayathri',
    load: () => import('./Gayathri') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gelasio',
    importName: 'Gelasio',
    load: () => import('./Gelasio') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gemunu Libre',
    importName: 'GemunuLibre',
    load: () => import('./GemunuLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Genos',
    importName: 'Genos',
    load: () => import('./Genos') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gentium Book Plus',
    importName: 'GentiumBookPlus',
    load: () => import('./GentiumBookPlus') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gentium Plus',
    importName: 'GentiumPlus',
    load: () => import('./GentiumPlus') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Geo',
    importName: 'Geo',
    load: () => import('./Geo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Geologica',
    importName: 'Geologica',
    load: () => import('./Geologica') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Georama',
    importName: 'Georama',
    load: () => import('./Georama') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Geostar',
    importName: 'Geostar',
    load: () => import('./Geostar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Geostar Fill',
    importName: 'GeostarFill',
    load: () => import('./GeostarFill') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Germania One',
    importName: 'GermaniaOne',
    load: () => import('./GermaniaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gideon Roman',
    importName: 'GideonRoman',
    load: () => import('./GideonRoman') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gidugu',
    importName: 'Gidugu',
    load: () => import('./Gidugu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gilda Display',
    importName: 'GildaDisplay',
    load: () => import('./GildaDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Girassol',
    importName: 'Girassol',
    load: () => import('./Girassol') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Give You Glory',
    importName: 'GiveYouGlory',
    load: () => import('./GiveYouGlory') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Glass Antiqua',
    importName: 'GlassAntiqua',
    load: () => import('./GlassAntiqua') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Glegoo',
    importName: 'Glegoo',
    load: () => import('./Glegoo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gloock',
    importName: 'Gloock',
    load: () => import('./Gloock') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gloria Hallelujah',
    importName: 'GloriaHallelujah',
    load: () => import('./GloriaHallelujah') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Glory',
    importName: 'Glory',
    load: () => import('./Glory') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gluten',
    importName: 'Gluten',
    load: () => import('./Gluten') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Goblin One',
    importName: 'GoblinOne',
    load: () => import('./GoblinOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gochi Hand',
    importName: 'GochiHand',
    load: () => import('./GochiHand') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Goldman',
    importName: 'Goldman',
    load: () => import('./Goldman') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Golos Text',
    importName: 'GolosText',
    load: () => import('./GolosText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gorditas',
    importName: 'Gorditas',
    load: () => import('./Gorditas') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gothic A1',
    importName: 'GothicA1',
    load: () => import('./GothicA1') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gotu',
    importName: 'Gotu',
    load: () => import('./Gotu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Goudy Bookletter 1911',
    importName: 'GoudyBookletter1911',
    load: () => import('./GoudyBookletter1911') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gowun Batang',
    importName: 'GowunBatang',
    load: () => import('./GowunBatang') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gowun Dodum',
    importName: 'GowunDodum',
    load: () => import('./GowunDodum') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Graduate',
    importName: 'Graduate',
    load: () => import('./Graduate') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Grand Hotel',
    importName: 'GrandHotel',
    load: () => import('./GrandHotel') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Grandiflora One',
    importName: 'GrandifloraOne',
    load: () => import('./GrandifloraOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Grandstander',
    importName: 'Grandstander',
    load: () => import('./Grandstander') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Grape Nuts',
    importName: 'GrapeNuts',
    load: () => import('./GrapeNuts') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gravitas One',
    importName: 'GravitasOne',
    load: () => import('./GravitasOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Great Vibes',
    importName: 'GreatVibes',
    load: () => import('./GreatVibes') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Grechen Fuemen',
    importName: 'GrechenFuemen',
    load: () => import('./GrechenFuemen') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Grenze',
    importName: 'Grenze',
    load: () => import('./Grenze') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Grenze Gotisch',
    importName: 'GrenzeGotisch',
    load: () => import('./GrenzeGotisch') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Grey Qo',
    importName: 'GreyQo',
    load: () => import('./GreyQo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Griffy',
    importName: 'Griffy',
    load: () => import('./Griffy') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gruppo',
    importName: 'Gruppo',
    load: () => import('./Gruppo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gudea',
    importName: 'Gudea',
    load: () => import('./Gudea') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gugi',
    importName: 'Gugi',
    load: () => import('./Gugi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gulzar',
    importName: 'Gulzar',
    load: () => import('./Gulzar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gupter',
    importName: 'Gupter',
    load: () => import('./Gupter') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gurajada',
    importName: 'Gurajada',
    load: () => import('./Gurajada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Gwendolyn',
    importName: 'Gwendolyn',
    load: () => import('./Gwendolyn') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Habibi',
    importName: 'Habibi',
    load: () => import('./Habibi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hachi Maru Pop',
    importName: 'HachiMaruPop',
    load: () => import('./HachiMaruPop') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hahmlet',
    importName: 'Hahmlet',
    load: () => import('./Hahmlet') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Halant',
    importName: 'Halant',
    load: () => import('./Halant') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hammersmith One',
    importName: 'HammersmithOne',
    load: () => import('./HammersmithOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hanalei',
    importName: 'Hanalei',
    load: () => import('./Hanalei') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hanalei Fill',
    importName: 'HanaleiFill',
    load: () => import('./HanaleiFill') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Handjet',
    importName: 'Handjet',
    load: () => import('./Handjet') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Handlee',
    importName: 'Handlee',
    load: () => import('./Handlee') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hanken Grotesk',
    importName: 'HankenGrotesk',
    load: () => import('./HankenGrotesk') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hanuman',
    importName: 'Hanuman',
    load: () => import('./Hanuman') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Happy Monkey',
    importName: 'HappyMonkey',
    load: () => import('./HappyMonkey') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Harmattan',
    importName: 'Harmattan',
    load: () => import('./Harmattan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Headland One',
    importName: 'HeadlandOne',
    load: () => import('./HeadlandOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Heebo',
    importName: 'Heebo',
    load: () => import('./Heebo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Henny Penny',
    importName: 'HennyPenny',
    load: () => import('./HennyPenny') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hepta Slab',
    importName: 'HeptaSlab',
    load: () => import('./HeptaSlab') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Herr Von Muellerhoff',
    importName: 'HerrVonMuellerhoff',
    load: () => import('./HerrVonMuellerhoff') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hi Melody',
    importName: 'HiMelody',
    load: () => import('./HiMelody') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hina Mincho',
    importName: 'HinaMincho',
    load: () => import('./HinaMincho') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hind',
    importName: 'Hind',
    load: () => import('./Hind') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hind Guntur',
    importName: 'HindGuntur',
    load: () => import('./HindGuntur') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hind Madurai',
    importName: 'HindMadurai',
    load: () => import('./HindMadurai') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hind Siliguri',
    importName: 'HindSiliguri',
    load: () => import('./HindSiliguri') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hind Vadodara',
    importName: 'HindVadodara',
    load: () => import('./HindVadodara') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Holtwood One SC',
    importName: 'HoltwoodOneSC',
    load: () => import('./HoltwoodOneSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Homemade Apple',
    importName: 'HomemadeApple',
    load: () => import('./HomemadeApple') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Homenaje',
    importName: 'Homenaje',
    load: () => import('./Homenaje') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hubballi',
    importName: 'Hubballi',
    load: () => import('./Hubballi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Hurricane',
    importName: 'Hurricane',
    load: () => import('./Hurricane') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Mono',
    importName: 'IBMPlexMono',
    load: () => import('./IBMPlexMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Sans',
    importName: 'IBMPlexSans',
    load: () => import('./IBMPlexSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Sans Arabic',
    importName: 'IBMPlexSansArabic',
    load: () => import('./IBMPlexSansArabic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Sans Condensed',
    importName: 'IBMPlexSansCondensed',
    load: () => import('./IBMPlexSansCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Sans Devanagari',
    importName: 'IBMPlexSansDevanagari',
    load: () => import('./IBMPlexSansDevanagari') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Sans Hebrew',
    importName: 'IBMPlexSansHebrew',
    load: () => import('./IBMPlexSansHebrew') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Sans JP',
    importName: 'IBMPlexSansJP',
    load: () => import('./IBMPlexSansJP') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Sans KR',
    importName: 'IBMPlexSansKR',
    load: () => import('./IBMPlexSansKR') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Sans Thai',
    importName: 'IBMPlexSansThai',
    load: () => import('./IBMPlexSansThai') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Sans Thai Looped',
    importName: 'IBMPlexSansThaiLooped',
    load: () => import('./IBMPlexSansThaiLooped') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IBM Plex Serif',
    importName: 'IBMPlexSerif',
    load: () => import('./IBMPlexSerif') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IM Fell DW Pica',
    importName: 'IMFellDWPica',
    load: () => import('./IMFellDWPica') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IM Fell DW Pica SC',
    importName: 'IMFellDWPicaSC',
    load: () => import('./IMFellDWPicaSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IM Fell Double Pica',
    importName: 'IMFellDoublePica',
    load: () => import('./IMFellDoublePica') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IM Fell Double Pica SC',
    importName: 'IMFellDoublePicaSC',
    load: () => import('./IMFellDoublePicaSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IM Fell English',
    importName: 'IMFellEnglish',
    load: () => import('./IMFellEnglish') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IM Fell English SC',
    importName: 'IMFellEnglishSC',
    load: () => import('./IMFellEnglishSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IM Fell French Canon',
    importName: 'IMFellFrenchCanon',
    load: () => import('./IMFellFrenchCanon') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IM Fell French Canon SC',
    importName: 'IMFellFrenchCanonSC',
    load: () => import('./IMFellFrenchCanonSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IM Fell Great Primer',
    importName: 'IMFellGreatPrimer',
    load: () => import('./IMFellGreatPrimer') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'IM Fell Great Primer SC',
    importName: 'IMFellGreatPrimerSC',
    load: () => import('./IMFellGreatPrimerSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ibarra Real Nova',
    importName: 'IbarraRealNova',
    load: () => import('./IbarraRealNova') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Iceberg',
    importName: 'Iceberg',
    load: () => import('./Iceberg') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Iceland',
    importName: 'Iceland',
    load: () => import('./Iceland') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Imbue',
    importName: 'Imbue',
    load: () => import('./Imbue') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Imperial Script',
    importName: 'ImperialScript',
    load: () => import('./ImperialScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Imprima',
    importName: 'Imprima',
    load: () => import('./Imprima') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Inclusive Sans',
    importName: 'InclusiveSans',
    load: () => import('./InclusiveSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Inconsolata',
    importName: 'Inconsolata',
    load: () => import('./Inconsolata') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Inder',
    importName: 'Inder',
    load: () => import('./Inder') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Indie Flower',
    importName: 'IndieFlower',
    load: () => import('./IndieFlower') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ingrid Darling',
    importName: 'IngridDarling',
    load: () => import('./IngridDarling') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Inika',
    importName: 'Inika',
    load: () => import('./Inika') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Inknut Antiqua',
    importName: 'InknutAntiqua',
    load: () => import('./InknutAntiqua') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Inria Sans',
    importName: 'InriaSans',
    load: () => import('./InriaSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Inria Serif',
    importName: 'InriaSerif',
    load: () => import('./InriaSerif') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Inspiration',
    importName: 'Inspiration',
    load: () => import('./Inspiration') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Instrument Sans',
    importName: 'InstrumentSans',
    load: () => import('./InstrumentSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Instrument Serif',
    importName: 'InstrumentSerif',
    load: () => import('./InstrumentSerif') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Inter',
    importName: 'Inter',
    load: () => import('./Inter') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Inter Tight',
    importName: 'InterTight',
    load: () => import('./InterTight') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Irish Grover',
    importName: 'IrishGrover',
    load: () => import('./IrishGrover') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Island Moments',
    importName: 'IslandMoments',
    load: () => import('./IslandMoments') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Istok Web',
    importName: 'IstokWeb',
    load: () => import('./IstokWeb') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Italiana',
    importName: 'Italiana',
    load: () => import('./Italiana') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Italianno',
    importName: 'Italianno',
    load: () => import('./Italianno') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Itim',
    importName: 'Itim',
    load: () => import('./Itim') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jacques Francois',
    importName: 'JacquesFrancois',
    load: () => import('./JacquesFrancois') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jacques Francois Shadow',
    importName: 'JacquesFrancoisShadow',
    load: () => import('./JacquesFrancoisShadow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jaldi',
    importName: 'Jaldi',
    load: () => import('./Jaldi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'JetBrains Mono',
    importName: 'JetBrainsMono',
    load: () => import('./JetBrainsMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jim Nightshade',
    importName: 'JimNightshade',
    load: () => import('./JimNightshade') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Joan',
    importName: 'Joan',
    load: () => import('./Joan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jockey One',
    importName: 'JockeyOne',
    load: () => import('./JockeyOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jolly Lodger',
    importName: 'JollyLodger',
    load: () => import('./JollyLodger') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jomhuria',
    importName: 'Jomhuria',
    load: () => import('./Jomhuria') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jomolhari',
    importName: 'Jomolhari',
    load: () => import('./Jomolhari') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Josefin Sans',
    importName: 'JosefinSans',
    load: () => import('./JosefinSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Josefin Slab',
    importName: 'JosefinSlab',
    load: () => import('./JosefinSlab') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jost',
    importName: 'Jost',
    load: () => import('./Jost') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Joti One',
    importName: 'JotiOne',
    load: () => import('./JotiOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jua',
    importName: 'Jua',
    load: () => import('./Jua') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Judson',
    importName: 'Judson',
    load: () => import('./Judson') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Julee',
    importName: 'Julee',
    load: () => import('./Julee') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Julius Sans One',
    importName: 'JuliusSansOne',
    load: () => import('./JuliusSansOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Junge',
    importName: 'Junge',
    load: () => import('./Junge') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Jura',
    importName: 'Jura',
    load: () => import('./Jura') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Just Another Hand',
    importName: 'JustAnotherHand',
    load: () => import('./JustAnotherHand') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Just Me Again Down Here',
    importName: 'JustMeAgainDownHere',
    load: () => import('./JustMeAgainDownHere') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'K2D',
    importName: 'K2D',
    load: () => import('./K2D') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kablammo',
    importName: 'Kablammo',
    load: () => import('./Kablammo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kadwa',
    importName: 'Kadwa',
    load: () => import('./Kadwa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kaisei Decol',
    importName: 'KaiseiDecol',
    load: () => import('./KaiseiDecol') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kaisei HarunoUmi',
    importName: 'KaiseiHarunoUmi',
    load: () => import('./KaiseiHarunoUmi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kaisei Opti',
    importName: 'KaiseiOpti',
    load: () => import('./KaiseiOpti') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kaisei Tokumin',
    importName: 'KaiseiTokumin',
    load: () => import('./KaiseiTokumin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kalam',
    importName: 'Kalam',
    load: () => import('./Kalam') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kameron',
    importName: 'Kameron',
    load: () => import('./Kameron') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kanit',
    importName: 'Kanit',
    load: () => import('./Kanit') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kantumruy Pro',
    importName: 'KantumruyPro',
    load: () => import('./KantumruyPro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Karantina',
    importName: 'Karantina',
    load: () => import('./Karantina') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Karla',
    importName: 'Karla',
    load: () => import('./Karla') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Karma',
    importName: 'Karma',
    load: () => import('./Karma') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Katibeh',
    importName: 'Katibeh',
    load: () => import('./Katibeh') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kaushan Script',
    importName: 'KaushanScript',
    load: () => import('./KaushanScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kavivanar',
    importName: 'Kavivanar',
    load: () => import('./Kavivanar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kavoon',
    importName: 'Kavoon',
    load: () => import('./Kavoon') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kay Pho Du',
    importName: 'KayPhoDu',
    load: () => import('./KayPhoDu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kdam Thmor Pro',
    importName: 'KdamThmorPro',
    load: () => import('./KdamThmorPro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Keania One',
    importName: 'KeaniaOne',
    load: () => import('./KeaniaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kelly Slab',
    importName: 'KellySlab',
    load: () => import('./KellySlab') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kenia',
    importName: 'Kenia',
    load: () => import('./Kenia') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Khand',
    importName: 'Khand',
    load: () => import('./Khand') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Khmer',
    importName: 'Khmer',
    load: () => import('./Khmer') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Khula',
    importName: 'Khula',
    load: () => import('./Khula') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kings',
    importName: 'Kings',
    load: () => import('./Kings') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kirang Haerang',
    importName: 'KirangHaerang',
    load: () => import('./KirangHaerang') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kite One',
    importName: 'KiteOne',
    load: () => import('./KiteOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kiwi Maru',
    importName: 'KiwiMaru',
    load: () => import('./KiwiMaru') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Klee One',
    importName: 'KleeOne',
    load: () => import('./KleeOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Knewave',
    importName: 'Knewave',
    load: () => import('./Knewave') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'KoHo',
    importName: 'KoHo',
    load: () => import('./KoHo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kodchasan',
    importName: 'Kodchasan',
    load: () => import('./Kodchasan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Koh Santepheap',
    importName: 'KohSantepheap',
    load: () => import('./KohSantepheap') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kolker Brush',
    importName: 'KolkerBrush',
    load: () => import('./KolkerBrush') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Konkhmer Sleokchher',
    importName: 'KonkhmerSleokchher',
    load: () => import('./KonkhmerSleokchher') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kosugi',
    importName: 'Kosugi',
    load: () => import('./Kosugi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kosugi Maru',
    importName: 'KosugiMaru',
    load: () => import('./KosugiMaru') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kotta One',
    importName: 'KottaOne',
    load: () => import('./KottaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Koulen',
    importName: 'Koulen',
    load: () => import('./Koulen') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kranky',
    importName: 'Kranky',
    load: () => import('./Kranky') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kreon',
    importName: 'Kreon',
    load: () => import('./Kreon') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kristi',
    importName: 'Kristi',
    load: () => import('./Kristi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Krona One',
    importName: 'KronaOne',
    load: () => import('./KronaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Krub',
    importName: 'Krub',
    load: () => import('./Krub') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kufam',
    importName: 'Kufam',
    load: () => import('./Kufam') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kulim Park',
    importName: 'KulimPark',
    load: () => import('./KulimPark') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kumar One',
    importName: 'KumarOne',
    load: () => import('./KumarOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kumar One Outline',
    importName: 'KumarOneOutline',
    load: () => import('./KumarOneOutline') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kumbh Sans',
    importName: 'KumbhSans',
    load: () => import('./KumbhSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Kurale',
    importName: 'Kurale',
    load: () => import('./Kurale') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'La Belle Aurore',
    importName: 'LaBelleAurore',
    load: () => import('./LaBelleAurore') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Labrada',
    importName: 'Labrada',
    load: () => import('./Labrada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lacquer',
    importName: 'Lacquer',
    load: () => import('./Lacquer') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Laila',
    importName: 'Laila',
    load: () => import('./Laila') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lakki Reddy',
    importName: 'LakkiReddy',
    load: () => import('./LakkiReddy') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lalezar',
    importName: 'Lalezar',
    load: () => import('./Lalezar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lancelot',
    importName: 'Lancelot',
    load: () => import('./Lancelot') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Langar',
    importName: 'Langar',
    load: () => import('./Langar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lateef',
    importName: 'Lateef',
    load: () => import('./Lateef') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lato',
    importName: 'Lato',
    load: () => import('./Lato') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lavishly Yours',
    importName: 'LavishlyYours',
    load: () => import('./LavishlyYours') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'League Gothic',
    importName: 'LeagueGothic',
    load: () => import('./LeagueGothic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'League Script',
    importName: 'LeagueScript',
    load: () => import('./LeagueScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'League Spartan',
    importName: 'LeagueSpartan',
    load: () => import('./LeagueSpartan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Leckerli One',
    importName: 'LeckerliOne',
    load: () => import('./LeckerliOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ledger',
    importName: 'Ledger',
    load: () => import('./Ledger') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lekton',
    importName: 'Lekton',
    load: () => import('./Lekton') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lemon',
    importName: 'Lemon',
    load: () => import('./Lemon') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lemonada',
    importName: 'Lemonada',
    load: () => import('./Lemonada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lexend',
    importName: 'Lexend',
    load: () => import('./Lexend') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lexend Deca',
    importName: 'LexendDeca',
    load: () => import('./LexendDeca') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lexend Exa',
    importName: 'LexendExa',
    load: () => import('./LexendExa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lexend Giga',
    importName: 'LexendGiga',
    load: () => import('./LexendGiga') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lexend Mega',
    importName: 'LexendMega',
    load: () => import('./LexendMega') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lexend Peta',
    importName: 'LexendPeta',
    load: () => import('./LexendPeta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lexend Tera',
    importName: 'LexendTera',
    load: () => import('./LexendTera') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lexend Zetta',
    importName: 'LexendZetta',
    load: () => import('./LexendZetta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Barcode 128',
    importName: 'LibreBarcode128',
    load: () => import('./LibreBarcode128') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Barcode 128 Text',
    importName: 'LibreBarcode128Text',
    load: () => import('./LibreBarcode128Text') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Barcode 39',
    importName: 'LibreBarcode39',
    load: () => import('./LibreBarcode39') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Barcode 39 Extended',
    importName: 'LibreBarcode39Extended',
    load: () => import('./LibreBarcode39Extended') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Barcode 39 Extended Text',
    importName: 'LibreBarcode39ExtendedText',
    load: () => import('./LibreBarcode39ExtendedText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Barcode 39 Text',
    importName: 'LibreBarcode39Text',
    load: () => import('./LibreBarcode39Text') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Barcode EAN13 Text',
    importName: 'LibreBarcodeEAN13Text',
    load: () => import('./LibreBarcodeEAN13Text') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Baskerville',
    importName: 'LibreBaskerville',
    load: () => import('./LibreBaskerville') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Bodoni',
    importName: 'LibreBodoni',
    load: () => import('./LibreBodoni') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Caslon Display',
    importName: 'LibreCaslonDisplay',
    load: () => import('./LibreCaslonDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Caslon Text',
    importName: 'LibreCaslonText',
    load: () => import('./LibreCaslonText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Libre Franklin',
    importName: 'LibreFranklin',
    load: () => import('./LibreFranklin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Licorice',
    importName: 'Licorice',
    load: () => import('./Licorice') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Life Savers',
    importName: 'LifeSavers',
    load: () => import('./LifeSavers') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lilita One',
    importName: 'LilitaOne',
    load: () => import('./LilitaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lily Script One',
    importName: 'LilyScriptOne',
    load: () => import('./LilyScriptOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Limelight',
    importName: 'Limelight',
    load: () => import('./Limelight') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Linden Hill',
    importName: 'LindenHill',
    load: () => import('./LindenHill') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Linefont',
    importName: 'Linefont',
    load: () => import('./Linefont') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lisu Bosa',
    importName: 'LisuBosa',
    load: () => import('./LisuBosa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Literata',
    importName: 'Literata',
    load: () => import('./Literata') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Liu Jian Mao Cao',
    importName: 'LiuJianMaoCao',
    load: () => import('./LiuJianMaoCao') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Livvic',
    importName: 'Livvic',
    load: () => import('./Livvic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lobster',
    importName: 'Lobster',
    load: () => import('./Lobster') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lobster Two',
    importName: 'LobsterTwo',
    load: () => import('./LobsterTwo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Londrina Outline',
    importName: 'LondrinaOutline',
    load: () => import('./LondrinaOutline') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Londrina Shadow',
    importName: 'LondrinaShadow',
    load: () => import('./LondrinaShadow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Londrina Sketch',
    importName: 'LondrinaSketch',
    load: () => import('./LondrinaSketch') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Londrina Solid',
    importName: 'LondrinaSolid',
    load: () => import('./LondrinaSolid') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Long Cang',
    importName: 'LongCang',
    load: () => import('./LongCang') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lora',
    importName: 'Lora',
    load: () => import('./Lora') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Love Light',
    importName: 'LoveLight',
    load: () => import('./LoveLight') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Love Ya Like A Sister',
    importName: 'LoveYaLikeASister',
    load: () => import('./LoveYaLikeASister') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Loved by the King',
    importName: 'LovedbytheKing',
    load: () => import('./LovedbytheKing') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lovers Quarrel',
    importName: 'LoversQuarrel',
    load: () => import('./LoversQuarrel') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Luckiest Guy',
    importName: 'LuckiestGuy',
    load: () => import('./LuckiestGuy') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lugrasimo',
    importName: 'Lugrasimo',
    load: () => import('./Lugrasimo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lumanosimo',
    importName: 'Lumanosimo',
    load: () => import('./Lumanosimo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lunasima',
    importName: 'Lunasima',
    load: () => import('./Lunasima') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lusitana',
    importName: 'Lusitana',
    load: () => import('./Lusitana') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Lustria',
    importName: 'Lustria',
    load: () => import('./Lustria') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Luxurious Roman',
    importName: 'LuxuriousRoman',
    load: () => import('./LuxuriousRoman') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Luxurious Script',
    importName: 'LuxuriousScript',
    load: () => import('./LuxuriousScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'M PLUS 1',
    importName: 'MPLUS1',
    load: () => import('./MPLUS1') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'M PLUS 1 Code',
    importName: 'MPLUS1Code',
    load: () => import('./MPLUS1Code') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'M PLUS 1p',
    importName: 'MPLUS1p',
    load: () => import('./MPLUS1p') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'M PLUS 2',
    importName: 'MPLUS2',
    load: () => import('./MPLUS2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'M PLUS Code Latin',
    importName: 'MPLUSCodeLatin',
    load: () => import('./MPLUSCodeLatin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'M PLUS Rounded 1c',
    importName: 'MPLUSRounded1c',
    load: () => import('./MPLUSRounded1c') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ma Shan Zheng',
    importName: 'MaShanZheng',
    load: () => import('./MaShanZheng') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Macondo',
    importName: 'Macondo',
    load: () => import('./Macondo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Macondo Swash Caps',
    importName: 'MacondoSwashCaps',
    load: () => import('./MacondoSwashCaps') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mada',
    importName: 'Mada',
    load: () => import('./Mada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Magra',
    importName: 'Magra',
    load: () => import('./Magra') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Maiden Orange',
    importName: 'MaidenOrange',
    load: () => import('./MaidenOrange') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Maitree',
    importName: 'Maitree',
    load: () => import('./Maitree') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Major Mono Display',
    importName: 'MajorMonoDisplay',
    load: () => import('./MajorMonoDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mako',
    importName: 'Mako',
    load: () => import('./Mako') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mali',
    importName: 'Mali',
    load: () => import('./Mali') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mallanna',
    importName: 'Mallanna',
    load: () => import('./Mallanna') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mandali',
    importName: 'Mandali',
    load: () => import('./Mandali') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Manjari',
    importName: 'Manjari',
    load: () => import('./Manjari') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Manrope',
    importName: 'Manrope',
    load: () => import('./Manrope') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mansalva',
    importName: 'Mansalva',
    load: () => import('./Mansalva') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Manuale',
    importName: 'Manuale',
    load: () => import('./Manuale') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Marcellus',
    importName: 'Marcellus',
    load: () => import('./Marcellus') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Marcellus SC',
    importName: 'MarcellusSC',
    load: () => import('./MarcellusSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Marck Script',
    importName: 'MarckScript',
    load: () => import('./MarckScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Margarine',
    importName: 'Margarine',
    load: () => import('./Margarine') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Marhey',
    importName: 'Marhey',
    load: () => import('./Marhey') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Markazi Text',
    importName: 'MarkaziText',
    load: () => import('./MarkaziText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Marko One',
    importName: 'MarkoOne',
    load: () => import('./MarkoOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Marmelad',
    importName: 'Marmelad',
    load: () => import('./Marmelad') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Martel',
    importName: 'Martel',
    load: () => import('./Martel') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Martel Sans',
    importName: 'MartelSans',
    load: () => import('./MartelSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Martian Mono',
    importName: 'MartianMono',
    load: () => import('./MartianMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Marvel',
    importName: 'Marvel',
    load: () => import('./Marvel') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mate',
    importName: 'Mate',
    load: () => import('./Mate') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mate SC',
    importName: 'MateSC',
    load: () => import('./MateSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Maven Pro',
    importName: 'MavenPro',
    load: () => import('./MavenPro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'McLaren',
    importName: 'McLaren',
    load: () => import('./McLaren') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mea Culpa',
    importName: 'MeaCulpa',
    load: () => import('./MeaCulpa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Meddon',
    importName: 'Meddon',
    load: () => import('./Meddon') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'MedievalSharp',
    importName: 'MedievalSharp',
    load: () => import('./MedievalSharp') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Medula One',
    importName: 'MedulaOne',
    load: () => import('./MedulaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Meera Inimai',
    importName: 'MeeraInimai',
    load: () => import('./MeeraInimai') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Megrim',
    importName: 'Megrim',
    load: () => import('./Megrim') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Meie Script',
    importName: 'MeieScript',
    load: () => import('./MeieScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Meow Script',
    importName: 'MeowScript',
    load: () => import('./MeowScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Merienda',
    importName: 'Merienda',
    load: () => import('./Merienda') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Merriweather',
    importName: 'Merriweather',
    load: () => import('./Merriweather') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Merriweather Sans',
    importName: 'MerriweatherSans',
    load: () => import('./MerriweatherSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Metal',
    importName: 'Metal',
    load: () => import('./Metal') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Metal Mania',
    importName: 'MetalMania',
    load: () => import('./MetalMania') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Metamorphous',
    importName: 'Metamorphous',
    load: () => import('./Metamorphous') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Metrophobic',
    importName: 'Metrophobic',
    load: () => import('./Metrophobic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Michroma',
    importName: 'Michroma',
    load: () => import('./Michroma') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Milonga',
    importName: 'Milonga',
    load: () => import('./Milonga') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Miltonian',
    importName: 'Miltonian',
    load: () => import('./Miltonian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Miltonian Tattoo',
    importName: 'MiltonianTattoo',
    load: () => import('./MiltonianTattoo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mina',
    importName: 'Mina',
    load: () => import('./Mina') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mingzat',
    importName: 'Mingzat',
    load: () => import('./Mingzat') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Miniver',
    importName: 'Miniver',
    load: () => import('./Miniver') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Miriam Libre',
    importName: 'MiriamLibre',
    load: () => import('./MiriamLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mirza',
    importName: 'Mirza',
    load: () => import('./Mirza') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Miss Fajardose',
    importName: 'MissFajardose',
    load: () => import('./MissFajardose') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mitr',
    importName: 'Mitr',
    load: () => import('./Mitr') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mochiy Pop One',
    importName: 'MochiyPopOne',
    load: () => import('./MochiyPopOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mochiy Pop P One',
    importName: 'MochiyPopPOne',
    load: () => import('./MochiyPopPOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Modak',
    importName: 'Modak',
    load: () => import('./Modak') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Modern Antiqua',
    importName: 'ModernAntiqua',
    load: () => import('./ModernAntiqua') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mogra',
    importName: 'Mogra',
    load: () => import('./Mogra') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mohave',
    importName: 'Mohave',
    load: () => import('./Mohave') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Moirai One',
    importName: 'MoiraiOne',
    load: () => import('./MoiraiOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Molengo',
    importName: 'Molengo',
    load: () => import('./Molengo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Molle',
    importName: 'Molle',
    load: () => import('./Molle') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Monda',
    importName: 'Monda',
    load: () => import('./Monda') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Monofett',
    importName: 'Monofett',
    load: () => import('./Monofett') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Monomaniac One',
    importName: 'MonomaniacOne',
    load: () => import('./MonomaniacOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Monoton',
    importName: 'Monoton',
    load: () => import('./Monoton') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Monsieur La Doulaise',
    importName: 'MonsieurLaDoulaise',
    load: () => import('./MonsieurLaDoulaise') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Montaga',
    importName: 'Montaga',
    load: () => import('./Montaga') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Montagu Slab',
    importName: 'MontaguSlab',
    load: () => import('./MontaguSlab') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'MonteCarlo',
    importName: 'MonteCarlo',
    load: () => import('./MonteCarlo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Montez',
    importName: 'Montez',
    load: () => import('./Montez') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Montserrat',
    importName: 'Montserrat',
    load: () => import('./Montserrat') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Montserrat Alternates',
    importName: 'MontserratAlternates',
    load: () => import('./MontserratAlternates') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Montserrat Subrayada',
    importName: 'MontserratSubrayada',
    load: () => import('./MontserratSubrayada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Moo Lah Lah',
    importName: 'MooLahLah',
    load: () => import('./MooLahLah') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mooli',
    importName: 'Mooli',
    load: () => import('./Mooli') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Moon Dance',
    importName: 'MoonDance',
    load: () => import('./MoonDance') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Moul',
    importName: 'Moul',
    load: () => import('./Moul') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Moulpali',
    importName: 'Moulpali',
    load: () => import('./Moulpali') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mountains of Christmas',
    importName: 'MountainsofChristmas',
    load: () => import('./MountainsofChristmas') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mouse Memoirs',
    importName: 'MouseMemoirs',
    load: () => import('./MouseMemoirs') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mr Bedfort',
    importName: 'MrBedfort',
    load: () => import('./MrBedfort') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mr Dafoe',
    importName: 'MrDafoe',
    load: () => import('./MrDafoe') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mr De Haviland',
    importName: 'MrDeHaviland',
    load: () => import('./MrDeHaviland') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mrs Saint Delafield',
    importName: 'MrsSaintDelafield',
    load: () => import('./MrsSaintDelafield') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mrs Sheppards',
    importName: 'MrsSheppards',
    load: () => import('./MrsSheppards') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ms Madi',
    importName: 'MsMadi',
    load: () => import('./MsMadi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mukta',
    importName: 'Mukta',
    load: () => import('./Mukta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mukta Mahee',
    importName: 'MuktaMahee',
    load: () => import('./MuktaMahee') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mukta Malar',
    importName: 'MuktaMalar',
    load: () => import('./MuktaMalar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mukta Vaani',
    importName: 'MuktaVaani',
    load: () => import('./MuktaVaani') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mulish',
    importName: 'Mulish',
    load: () => import('./Mulish') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Murecho',
    importName: 'Murecho',
    load: () => import('./Murecho') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'MuseoModerno',
    importName: 'MuseoModerno',
    load: () => import('./MuseoModerno') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'My Soul',
    importName: 'MySoul',
    load: () => import('./MySoul') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mynerve',
    importName: 'Mynerve',
    load: () => import('./Mynerve') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Mystery Quest',
    importName: 'MysteryQuest',
    load: () => import('./MysteryQuest') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'NTR',
    importName: 'NTR',
    load: () => import('./NTR') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nabla',
    importName: 'Nabla',
    load: () => import('./Nabla') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nanum Brush Script',
    importName: 'NanumBrushScript',
    load: () => import('./NanumBrushScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nanum Gothic',
    importName: 'NanumGothic',
    load: () => import('./NanumGothic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nanum Gothic Coding',
    importName: 'NanumGothicCoding',
    load: () => import('./NanumGothicCoding') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nanum Myeongjo',
    importName: 'NanumMyeongjo',
    load: () => import('./NanumMyeongjo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nanum Pen Script',
    importName: 'NanumPenScript',
    load: () => import('./NanumPenScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Narnoor',
    importName: 'Narnoor',
    load: () => import('./Narnoor') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Neonderthaw',
    importName: 'Neonderthaw',
    load: () => import('./Neonderthaw') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nerko One',
    importName: 'NerkoOne',
    load: () => import('./NerkoOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Neucha',
    importName: 'Neucha',
    load: () => import('./Neucha') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Neuton',
    importName: 'Neuton',
    load: () => import('./Neuton') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'New Rocker',
    importName: 'NewRocker',
    load: () => import('./NewRocker') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'New Tegomin',
    importName: 'NewTegomin',
    load: () => import('./NewTegomin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'News Cycle',
    importName: 'NewsCycle',
    load: () => import('./NewsCycle') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Newsreader',
    importName: 'Newsreader',
    load: () => import('./Newsreader') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Niconne',
    importName: 'Niconne',
    load: () => import('./Niconne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Niramit',
    importName: 'Niramit',
    load: () => import('./Niramit') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nixie One',
    importName: 'NixieOne',
    load: () => import('./NixieOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nobile',
    importName: 'Nobile',
    load: () => import('./Nobile') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nokora',
    importName: 'Nokora',
    load: () => import('./Nokora') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Norican',
    importName: 'Norican',
    load: () => import('./Norican') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nosifer',
    importName: 'Nosifer',
    load: () => import('./Nosifer') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Notable',
    importName: 'Notable',
    load: () => import('./Notable') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nothing You Could Do',
    importName: 'NothingYouCouldDo',
    load: () => import('./NothingYouCouldDo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noticia Text',
    importName: 'NoticiaText',
    load: () => import('./NoticiaText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Color Emoji',
    importName: 'NotoColorEmoji',
    load: () => import('./NotoColorEmoji') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Emoji',
    importName: 'NotoEmoji',
    load: () => import('./NotoEmoji') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Kufi Arabic',
    importName: 'NotoKufiArabic',
    load: () => import('./NotoKufiArabic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Music',
    importName: 'NotoMusic',
    load: () => import('./NotoMusic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Naskh Arabic',
    importName: 'NotoNaskhArabic',
    load: () => import('./NotoNaskhArabic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Nastaliq Urdu',
    importName: 'NotoNastaliqUrdu',
    load: () => import('./NotoNastaliqUrdu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Rashi Hebrew',
    importName: 'NotoRashiHebrew',
    load: () => import('./NotoRashiHebrew') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans',
    importName: 'NotoSans',
    load: () => import('./NotoSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Adlam',
    importName: 'NotoSansAdlam',
    load: () => import('./NotoSansAdlam') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Adlam Unjoined',
    importName: 'NotoSansAdlamUnjoined',
    load: () => import('./NotoSansAdlamUnjoined') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Anatolian Hieroglyphs',
    importName: 'NotoSansAnatolianHieroglyphs',
    load: () => import('./NotoSansAnatolianHieroglyphs') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Arabic',
    importName: 'NotoSansArabic',
    load: () => import('./NotoSansArabic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Armenian',
    importName: 'NotoSansArmenian',
    load: () => import('./NotoSansArmenian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Avestan',
    importName: 'NotoSansAvestan',
    load: () => import('./NotoSansAvestan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Balinese',
    importName: 'NotoSansBalinese',
    load: () => import('./NotoSansBalinese') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Bamum',
    importName: 'NotoSansBamum',
    load: () => import('./NotoSansBamum') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Bassa Vah',
    importName: 'NotoSansBassaVah',
    load: () => import('./NotoSansBassaVah') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Batak',
    importName: 'NotoSansBatak',
    load: () => import('./NotoSansBatak') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Bengali',
    importName: 'NotoSansBengali',
    load: () => import('./NotoSansBengali') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Bhaiksuki',
    importName: 'NotoSansBhaiksuki',
    load: () => import('./NotoSansBhaiksuki') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Brahmi',
    importName: 'NotoSansBrahmi',
    load: () => import('./NotoSansBrahmi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Buginese',
    importName: 'NotoSansBuginese',
    load: () => import('./NotoSansBuginese') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Buhid',
    importName: 'NotoSansBuhid',
    load: () => import('./NotoSansBuhid') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Canadian Aboriginal',
    importName: 'NotoSansCanadianAboriginal',
    load: () => import('./NotoSansCanadianAboriginal') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Carian',
    importName: 'NotoSansCarian',
    load: () => import('./NotoSansCarian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Caucasian Albanian',
    importName: 'NotoSansCaucasianAlbanian',
    load: () => import('./NotoSansCaucasianAlbanian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Chakma',
    importName: 'NotoSansChakma',
    load: () => import('./NotoSansChakma') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Cham',
    importName: 'NotoSansCham',
    load: () => import('./NotoSansCham') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Cherokee',
    importName: 'NotoSansCherokee',
    load: () => import('./NotoSansCherokee') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Chorasmian',
    importName: 'NotoSansChorasmian',
    load: () => import('./NotoSansChorasmian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Coptic',
    importName: 'NotoSansCoptic',
    load: () => import('./NotoSansCoptic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Cuneiform',
    importName: 'NotoSansCuneiform',
    load: () => import('./NotoSansCuneiform') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Cypriot',
    importName: 'NotoSansCypriot',
    load: () => import('./NotoSansCypriot') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Cypro Minoan',
    importName: 'NotoSansCyproMinoan',
    load: () => import('./NotoSansCyproMinoan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Deseret',
    importName: 'NotoSansDeseret',
    load: () => import('./NotoSansDeseret') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Devanagari',
    importName: 'NotoSansDevanagari',
    load: () => import('./NotoSansDevanagari') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Display',
    importName: 'NotoSansDisplay',
    load: () => import('./NotoSansDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Duployan',
    importName: 'NotoSansDuployan',
    load: () => import('./NotoSansDuployan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Egyptian Hieroglyphs',
    importName: 'NotoSansEgyptianHieroglyphs',
    load: () => import('./NotoSansEgyptianHieroglyphs') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Elbasan',
    importName: 'NotoSansElbasan',
    load: () => import('./NotoSansElbasan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Elymaic',
    importName: 'NotoSansElymaic',
    load: () => import('./NotoSansElymaic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Ethiopic',
    importName: 'NotoSansEthiopic',
    load: () => import('./NotoSansEthiopic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Georgian',
    importName: 'NotoSansGeorgian',
    load: () => import('./NotoSansGeorgian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Glagolitic',
    importName: 'NotoSansGlagolitic',
    load: () => import('./NotoSansGlagolitic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Gothic',
    importName: 'NotoSansGothic',
    load: () => import('./NotoSansGothic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Grantha',
    importName: 'NotoSansGrantha',
    load: () => import('./NotoSansGrantha') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Gujarati',
    importName: 'NotoSansGujarati',
    load: () => import('./NotoSansGujarati') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Gunjala Gondi',
    importName: 'NotoSansGunjalaGondi',
    load: () => import('./NotoSansGunjalaGondi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Gurmukhi',
    importName: 'NotoSansGurmukhi',
    load: () => import('./NotoSansGurmukhi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans HK',
    importName: 'NotoSansHK',
    load: () => import('./NotoSansHK') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Hanifi Rohingya',
    importName: 'NotoSansHanifiRohingya',
    load: () => import('./NotoSansHanifiRohingya') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Hanunoo',
    importName: 'NotoSansHanunoo',
    load: () => import('./NotoSansHanunoo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Hatran',
    importName: 'NotoSansHatran',
    load: () => import('./NotoSansHatran') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Hebrew',
    importName: 'NotoSansHebrew',
    load: () => import('./NotoSansHebrew') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Imperial Aramaic',
    importName: 'NotoSansImperialAramaic',
    load: () => import('./NotoSansImperialAramaic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Indic Siyaq Numbers',
    importName: 'NotoSansIndicSiyaqNumbers',
    load: () => import('./NotoSansIndicSiyaqNumbers') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Inscriptional Pahlavi',
    importName: 'NotoSansInscriptionalPahlavi',
    load: () => import('./NotoSansInscriptionalPahlavi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Inscriptional Parthian',
    importName: 'NotoSansInscriptionalParthian',
    load: () =>
      import('./NotoSansInscriptionalParthian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans JP',
    importName: 'NotoSansJP',
    load: () => import('./NotoSansJP') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Javanese',
    importName: 'NotoSansJavanese',
    load: () => import('./NotoSansJavanese') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans KR',
    importName: 'NotoSansKR',
    load: () => import('./NotoSansKR') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Kaithi',
    importName: 'NotoSansKaithi',
    load: () => import('./NotoSansKaithi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Kannada',
    importName: 'NotoSansKannada',
    load: () => import('./NotoSansKannada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Kawi',
    importName: 'NotoSansKawi',
    load: () => import('./NotoSansKawi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Kayah Li',
    importName: 'NotoSansKayahLi',
    load: () => import('./NotoSansKayahLi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Kharoshthi',
    importName: 'NotoSansKharoshthi',
    load: () => import('./NotoSansKharoshthi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Khmer',
    importName: 'NotoSansKhmer',
    load: () => import('./NotoSansKhmer') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Khojki',
    importName: 'NotoSansKhojki',
    load: () => import('./NotoSansKhojki') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Khudawadi',
    importName: 'NotoSansKhudawadi',
    load: () => import('./NotoSansKhudawadi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Lao',
    importName: 'NotoSansLao',
    load: () => import('./NotoSansLao') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Lao Looped',
    importName: 'NotoSansLaoLooped',
    load: () => import('./NotoSansLaoLooped') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Lepcha',
    importName: 'NotoSansLepcha',
    load: () => import('./NotoSansLepcha') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Limbu',
    importName: 'NotoSansLimbu',
    load: () => import('./NotoSansLimbu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Linear A',
    importName: 'NotoSansLinearA',
    load: () => import('./NotoSansLinearA') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Linear B',
    importName: 'NotoSansLinearB',
    load: () => import('./NotoSansLinearB') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Lisu',
    importName: 'NotoSansLisu',
    load: () => import('./NotoSansLisu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Lycian',
    importName: 'NotoSansLycian',
    load: () => import('./NotoSansLycian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Lydian',
    importName: 'NotoSansLydian',
    load: () => import('./NotoSansLydian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Mahajani',
    importName: 'NotoSansMahajani',
    load: () => import('./NotoSansMahajani') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Malayalam',
    importName: 'NotoSansMalayalam',
    load: () => import('./NotoSansMalayalam') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Mandaic',
    importName: 'NotoSansMandaic',
    load: () => import('./NotoSansMandaic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Manichaean',
    importName: 'NotoSansManichaean',
    load: () => import('./NotoSansManichaean') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Marchen',
    importName: 'NotoSansMarchen',
    load: () => import('./NotoSansMarchen') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Masaram Gondi',
    importName: 'NotoSansMasaramGondi',
    load: () => import('./NotoSansMasaramGondi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Math',
    importName: 'NotoSansMath',
    load: () => import('./NotoSansMath') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Mayan Numerals',
    importName: 'NotoSansMayanNumerals',
    load: () => import('./NotoSansMayanNumerals') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Medefaidrin',
    importName: 'NotoSansMedefaidrin',
    load: () => import('./NotoSansMedefaidrin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Meetei Mayek',
    importName: 'NotoSansMeeteiMayek',
    load: () => import('./NotoSansMeeteiMayek') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Mende Kikakui',
    importName: 'NotoSansMendeKikakui',
    load: () => import('./NotoSansMendeKikakui') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Meroitic',
    importName: 'NotoSansMeroitic',
    load: () => import('./NotoSansMeroitic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Miao',
    importName: 'NotoSansMiao',
    load: () => import('./NotoSansMiao') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Modi',
    importName: 'NotoSansModi',
    load: () => import('./NotoSansModi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Mongolian',
    importName: 'NotoSansMongolian',
    load: () => import('./NotoSansMongolian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Mono',
    importName: 'NotoSansMono',
    load: () => import('./NotoSansMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Mro',
    importName: 'NotoSansMro',
    load: () => import('./NotoSansMro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Multani',
    importName: 'NotoSansMultani',
    load: () => import('./NotoSansMultani') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Myanmar',
    importName: 'NotoSansMyanmar',
    load: () => import('./NotoSansMyanmar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans NKo',
    importName: 'NotoSansNKo',
    load: () => import('./NotoSansNKo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans NKo Unjoined',
    importName: 'NotoSansNKoUnjoined',
    load: () => import('./NotoSansNKoUnjoined') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Nabataean',
    importName: 'NotoSansNabataean',
    load: () => import('./NotoSansNabataean') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Nag Mundari',
    importName: 'NotoSansNagMundari',
    load: () => import('./NotoSansNagMundari') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Nandinagari',
    importName: 'NotoSansNandinagari',
    load: () => import('./NotoSansNandinagari') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans New Tai Lue',
    importName: 'NotoSansNewTaiLue',
    load: () => import('./NotoSansNewTaiLue') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Newa',
    importName: 'NotoSansNewa',
    load: () => import('./NotoSansNewa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Nushu',
    importName: 'NotoSansNushu',
    load: () => import('./NotoSansNushu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Ogham',
    importName: 'NotoSansOgham',
    load: () => import('./NotoSansOgham') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Ol Chiki',
    importName: 'NotoSansOlChiki',
    load: () => import('./NotoSansOlChiki') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Old Hungarian',
    importName: 'NotoSansOldHungarian',
    load: () => import('./NotoSansOldHungarian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Old Italic',
    importName: 'NotoSansOldItalic',
    load: () => import('./NotoSansOldItalic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Old North Arabian',
    importName: 'NotoSansOldNorthArabian',
    load: () => import('./NotoSansOldNorthArabian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Old Permic',
    importName: 'NotoSansOldPermic',
    load: () => import('./NotoSansOldPermic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Old Persian',
    importName: 'NotoSansOldPersian',
    load: () => import('./NotoSansOldPersian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Old Sogdian',
    importName: 'NotoSansOldSogdian',
    load: () => import('./NotoSansOldSogdian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Old South Arabian',
    importName: 'NotoSansOldSouthArabian',
    load: () => import('./NotoSansOldSouthArabian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Old Turkic',
    importName: 'NotoSansOldTurkic',
    load: () => import('./NotoSansOldTurkic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Oriya',
    importName: 'NotoSansOriya',
    load: () => import('./NotoSansOriya') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Osage',
    importName: 'NotoSansOsage',
    load: () => import('./NotoSansOsage') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Osmanya',
    importName: 'NotoSansOsmanya',
    load: () => import('./NotoSansOsmanya') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Pahawh Hmong',
    importName: 'NotoSansPahawhHmong',
    load: () => import('./NotoSansPahawhHmong') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Palmyrene',
    importName: 'NotoSansPalmyrene',
    load: () => import('./NotoSansPalmyrene') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Pau Cin Hau',
    importName: 'NotoSansPauCinHau',
    load: () => import('./NotoSansPauCinHau') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Phags Pa',
    importName: 'NotoSansPhagsPa',
    load: () => import('./NotoSansPhagsPa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Phoenician',
    importName: 'NotoSansPhoenician',
    load: () => import('./NotoSansPhoenician') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Psalter Pahlavi',
    importName: 'NotoSansPsalterPahlavi',
    load: () => import('./NotoSansPsalterPahlavi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Rejang',
    importName: 'NotoSansRejang',
    load: () => import('./NotoSansRejang') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Runic',
    importName: 'NotoSansRunic',
    load: () => import('./NotoSansRunic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans SC',
    importName: 'NotoSansSC',
    load: () => import('./NotoSansSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Samaritan',
    importName: 'NotoSansSamaritan',
    load: () => import('./NotoSansSamaritan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Saurashtra',
    importName: 'NotoSansSaurashtra',
    load: () => import('./NotoSansSaurashtra') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Sharada',
    importName: 'NotoSansSharada',
    load: () => import('./NotoSansSharada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Shavian',
    importName: 'NotoSansShavian',
    load: () => import('./NotoSansShavian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Siddham',
    importName: 'NotoSansSiddham',
    load: () => import('./NotoSansSiddham') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans SignWriting',
    importName: 'NotoSansSignWriting',
    load: () => import('./NotoSansSignWriting') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Sinhala',
    importName: 'NotoSansSinhala',
    load: () => import('./NotoSansSinhala') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Sogdian',
    importName: 'NotoSansSogdian',
    load: () => import('./NotoSansSogdian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Sora Sompeng',
    importName: 'NotoSansSoraSompeng',
    load: () => import('./NotoSansSoraSompeng') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Soyombo',
    importName: 'NotoSansSoyombo',
    load: () => import('./NotoSansSoyombo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Sundanese',
    importName: 'NotoSansSundanese',
    load: () => import('./NotoSansSundanese') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Syloti Nagri',
    importName: 'NotoSansSylotiNagri',
    load: () => import('./NotoSansSylotiNagri') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Symbols',
    importName: 'NotoSansSymbols',
    load: () => import('./NotoSansSymbols') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Symbols 2',
    importName: 'NotoSansSymbols2',
    load: () => import('./NotoSansSymbols2') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Syriac',
    importName: 'NotoSansSyriac',
    load: () => import('./NotoSansSyriac') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Syriac Eastern',
    importName: 'NotoSansSyriacEastern',
    load: () => import('./NotoSansSyriacEastern') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans TC',
    importName: 'NotoSansTC',
    load: () => import('./NotoSansTC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Tagalog',
    importName: 'NotoSansTagalog',
    load: () => import('./NotoSansTagalog') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Tagbanwa',
    importName: 'NotoSansTagbanwa',
    load: () => import('./NotoSansTagbanwa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Tai Le',
    importName: 'NotoSansTaiLe',
    load: () => import('./NotoSansTaiLe') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Tai Tham',
    importName: 'NotoSansTaiTham',
    load: () => import('./NotoSansTaiTham') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Tai Viet',
    importName: 'NotoSansTaiViet',
    load: () => import('./NotoSansTaiViet') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Takri',
    importName: 'NotoSansTakri',
    load: () => import('./NotoSansTakri') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Tamil',
    importName: 'NotoSansTamil',
    load: () => import('./NotoSansTamil') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Tamil Supplement',
    importName: 'NotoSansTamilSupplement',
    load: () => import('./NotoSansTamilSupplement') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Tangsa',
    importName: 'NotoSansTangsa',
    load: () => import('./NotoSansTangsa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Telugu',
    importName: 'NotoSansTelugu',
    load: () => import('./NotoSansTelugu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Thaana',
    importName: 'NotoSansThaana',
    load: () => import('./NotoSansThaana') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Thai',
    importName: 'NotoSansThai',
    load: () => import('./NotoSansThai') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Thai Looped',
    importName: 'NotoSansThaiLooped',
    load: () => import('./NotoSansThaiLooped') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Tifinagh',
    importName: 'NotoSansTifinagh',
    load: () => import('./NotoSansTifinagh') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Tirhuta',
    importName: 'NotoSansTirhuta',
    load: () => import('./NotoSansTirhuta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Ugaritic',
    importName: 'NotoSansUgaritic',
    load: () => import('./NotoSansUgaritic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Vai',
    importName: 'NotoSansVai',
    load: () => import('./NotoSansVai') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Vithkuqi',
    importName: 'NotoSansVithkuqi',
    load: () => import('./NotoSansVithkuqi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Wancho',
    importName: 'NotoSansWancho',
    load: () => import('./NotoSansWancho') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Warang Citi',
    importName: 'NotoSansWarangCiti',
    load: () => import('./NotoSansWarangCiti') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Yi',
    importName: 'NotoSansYi',
    load: () => import('./NotoSansYi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Sans Zanabazar Square',
    importName: 'NotoSansZanabazarSquare',
    load: () => import('./NotoSansZanabazarSquare') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif',
    importName: 'NotoSerif',
    load: () => import('./NotoSerif') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Ahom',
    importName: 'NotoSerifAhom',
    load: () => import('./NotoSerifAhom') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Armenian',
    importName: 'NotoSerifArmenian',
    load: () => import('./NotoSerifArmenian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Balinese',
    importName: 'NotoSerifBalinese',
    load: () => import('./NotoSerifBalinese') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Bengali',
    importName: 'NotoSerifBengali',
    load: () => import('./NotoSerifBengali') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Devanagari',
    importName: 'NotoSerifDevanagari',
    load: () => import('./NotoSerifDevanagari') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Display',
    importName: 'NotoSerifDisplay',
    load: () => import('./NotoSerifDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Dogra',
    importName: 'NotoSerifDogra',
    load: () => import('./NotoSerifDogra') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Ethiopic',
    importName: 'NotoSerifEthiopic',
    load: () => import('./NotoSerifEthiopic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Georgian',
    importName: 'NotoSerifGeorgian',
    load: () => import('./NotoSerifGeorgian') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Grantha',
    importName: 'NotoSerifGrantha',
    load: () => import('./NotoSerifGrantha') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Gujarati',
    importName: 'NotoSerifGujarati',
    load: () => import('./NotoSerifGujarati') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Gurmukhi',
    importName: 'NotoSerifGurmukhi',
    load: () => import('./NotoSerifGurmukhi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif HK',
    importName: 'NotoSerifHK',
    load: () => import('./NotoSerifHK') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Hebrew',
    importName: 'NotoSerifHebrew',
    load: () => import('./NotoSerifHebrew') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif JP',
    importName: 'NotoSerifJP',
    load: () => import('./NotoSerifJP') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif KR',
    importName: 'NotoSerifKR',
    load: () => import('./NotoSerifKR') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Kannada',
    importName: 'NotoSerifKannada',
    load: () => import('./NotoSerifKannada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Khitan Small Script',
    importName: 'NotoSerifKhitanSmallScript',
    load: () => import('./NotoSerifKhitanSmallScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Khmer',
    importName: 'NotoSerifKhmer',
    load: () => import('./NotoSerifKhmer') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Khojki',
    importName: 'NotoSerifKhojki',
    load: () => import('./NotoSerifKhojki') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Lao',
    importName: 'NotoSerifLao',
    load: () => import('./NotoSerifLao') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Makasar',
    importName: 'NotoSerifMakasar',
    load: () => import('./NotoSerifMakasar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Malayalam',
    importName: 'NotoSerifMalayalam',
    load: () => import('./NotoSerifMalayalam') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Myanmar',
    importName: 'NotoSerifMyanmar',
    load: () => import('./NotoSerifMyanmar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif NP Hmong',
    importName: 'NotoSerifNPHmong',
    load: () => import('./NotoSerifNPHmong') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Old Uyghur',
    importName: 'NotoSerifOldUyghur',
    load: () => import('./NotoSerifOldUyghur') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Oriya',
    importName: 'NotoSerifOriya',
    load: () => import('./NotoSerifOriya') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Ottoman Siyaq',
    importName: 'NotoSerifOttomanSiyaq',
    load: () => import('./NotoSerifOttomanSiyaq') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif SC',
    importName: 'NotoSerifSC',
    load: () => import('./NotoSerifSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Sinhala',
    importName: 'NotoSerifSinhala',
    load: () => import('./NotoSerifSinhala') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif TC',
    importName: 'NotoSerifTC',
    load: () => import('./NotoSerifTC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Tamil',
    importName: 'NotoSerifTamil',
    load: () => import('./NotoSerifTamil') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Tangut',
    importName: 'NotoSerifTangut',
    load: () => import('./NotoSerifTangut') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Telugu',
    importName: 'NotoSerifTelugu',
    load: () => import('./NotoSerifTelugu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Thai',
    importName: 'NotoSerifThai',
    load: () => import('./NotoSerifThai') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Tibetan',
    importName: 'NotoSerifTibetan',
    load: () => import('./NotoSerifTibetan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Toto',
    importName: 'NotoSerifToto',
    load: () => import('./NotoSerifToto') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Vithkuqi',
    importName: 'NotoSerifVithkuqi',
    load: () => import('./NotoSerifVithkuqi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Serif Yezidi',
    importName: 'NotoSerifYezidi',
    load: () => import('./NotoSerifYezidi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Noto Traditional Nushu',
    importName: 'NotoTraditionalNushu',
    load: () => import('./NotoTraditionalNushu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nova Cut',
    importName: 'NovaCut',
    load: () => import('./NovaCut') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nova Flat',
    importName: 'NovaFlat',
    load: () => import('./NovaFlat') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nova Mono',
    importName: 'NovaMono',
    load: () => import('./NovaMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nova Oval',
    importName: 'NovaOval',
    load: () => import('./NovaOval') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nova Round',
    importName: 'NovaRound',
    load: () => import('./NovaRound') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nova Script',
    importName: 'NovaScript',
    load: () => import('./NovaScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nova Slim',
    importName: 'NovaSlim',
    load: () => import('./NovaSlim') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nova Square',
    importName: 'NovaSquare',
    load: () => import('./NovaSquare') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Numans',
    importName: 'Numans',
    load: () => import('./Numans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nunito',
    importName: 'Nunito',
    load: () => import('./Nunito') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nunito Sans',
    importName: 'NunitoSans',
    load: () => import('./NunitoSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Nuosu SIL',
    importName: 'NuosuSIL',
    load: () => import('./NuosuSIL') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Odibee Sans',
    importName: 'OdibeeSans',
    load: () => import('./OdibeeSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Odor Mean Chey',
    importName: 'OdorMeanChey',
    load: () => import('./OdorMeanChey') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Offside',
    importName: 'Offside',
    load: () => import('./Offside') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oi',
    importName: 'Oi',
    load: () => import('./Oi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Old Standard TT',
    importName: 'OldStandardTT',
    load: () => import('./OldStandardTT') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oldenburg',
    importName: 'Oldenburg',
    load: () => import('./Oldenburg') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ole',
    importName: 'Ole',
    load: () => import('./Ole') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oleo Script',
    importName: 'OleoScript',
    load: () => import('./OleoScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oleo Script Swash Caps',
    importName: 'OleoScriptSwashCaps',
    load: () => import('./OleoScriptSwashCaps') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Onest',
    importName: 'Onest',
    load: () => import('./Onest') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oooh Baby',
    importName: 'OoohBaby',
    load: () => import('./OoohBaby') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Open Sans',
    importName: 'OpenSans',
    load: () => import('./OpenSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oranienbaum',
    importName: 'Oranienbaum',
    load: () => import('./Oranienbaum') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Orbit',
    importName: 'Orbit',
    load: () => import('./Orbit') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Orbitron',
    importName: 'Orbitron',
    load: () => import('./Orbitron') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oregano',
    importName: 'Oregano',
    load: () => import('./Oregano') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Orelega One',
    importName: 'OrelegaOne',
    load: () => import('./OrelegaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Orienta',
    importName: 'Orienta',
    load: () => import('./Orienta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Original Surfer',
    importName: 'OriginalSurfer',
    load: () => import('./OriginalSurfer') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oswald',
    importName: 'Oswald',
    load: () => import('./Oswald') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Outfit',
    importName: 'Outfit',
    load: () => import('./Outfit') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Over the Rainbow',
    importName: 'OvertheRainbow',
    load: () => import('./OvertheRainbow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Overlock',
    importName: 'Overlock',
    load: () => import('./Overlock') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Overlock SC',
    importName: 'OverlockSC',
    load: () => import('./OverlockSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Overpass',
    importName: 'Overpass',
    load: () => import('./Overpass') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Overpass Mono',
    importName: 'OverpassMono',
    load: () => import('./OverpassMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ovo',
    importName: 'Ovo',
    load: () => import('./Ovo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oxanium',
    importName: 'Oxanium',
    load: () => import('./Oxanium') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oxygen',
    importName: 'Oxygen',
    load: () => import('./Oxygen') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Oxygen Mono',
    importName: 'OxygenMono',
    load: () => import('./OxygenMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'PT Mono',
    importName: 'PTMono',
    load: () => import('./PTMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'PT Sans',
    importName: 'PTSans',
    load: () => import('./PTSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'PT Sans Caption',
    importName: 'PTSansCaption',
    load: () => import('./PTSansCaption') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'PT Sans Narrow',
    importName: 'PTSansNarrow',
    load: () => import('./PTSansNarrow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'PT Serif',
    importName: 'PTSerif',
    load: () => import('./PTSerif') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'PT Serif Caption',
    importName: 'PTSerifCaption',
    load: () => import('./PTSerifCaption') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pacifico',
    importName: 'Pacifico',
    load: () => import('./Pacifico') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Padauk',
    importName: 'Padauk',
    load: () => import('./Padauk') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Padyakke Expanded One',
    importName: 'PadyakkeExpandedOne',
    load: () => import('./PadyakkeExpandedOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Palanquin',
    importName: 'Palanquin',
    load: () => import('./Palanquin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Palanquin Dark',
    importName: 'PalanquinDark',
    load: () => import('./PalanquinDark') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Palette Mosaic',
    importName: 'PaletteMosaic',
    load: () => import('./PaletteMosaic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pangolin',
    importName: 'Pangolin',
    load: () => import('./Pangolin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Paprika',
    importName: 'Paprika',
    load: () => import('./Paprika') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Parisienne',
    importName: 'Parisienne',
    load: () => import('./Parisienne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Passero One',
    importName: 'PasseroOne',
    load: () => import('./PasseroOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Passion One',
    importName: 'PassionOne',
    load: () => import('./PassionOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Passions Conflict',
    importName: 'PassionsConflict',
    load: () => import('./PassionsConflict') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pathway Extreme',
    importName: 'PathwayExtreme',
    load: () => import('./PathwayExtreme') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pathway Gothic One',
    importName: 'PathwayGothicOne',
    load: () => import('./PathwayGothicOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Patrick Hand',
    importName: 'PatrickHand',
    load: () => import('./PatrickHand') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Patrick Hand SC',
    importName: 'PatrickHandSC',
    load: () => import('./PatrickHandSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pattaya',
    importName: 'Pattaya',
    load: () => import('./Pattaya') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Patua One',
    importName: 'PatuaOne',
    load: () => import('./PatuaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pavanam',
    importName: 'Pavanam',
    load: () => import('./Pavanam') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Paytone One',
    importName: 'PaytoneOne',
    load: () => import('./PaytoneOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Peddana',
    importName: 'Peddana',
    load: () => import('./Peddana') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Peralta',
    importName: 'Peralta',
    load: () => import('./Peralta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Permanent Marker',
    importName: 'PermanentMarker',
    load: () => import('./PermanentMarker') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Petemoss',
    importName: 'Petemoss',
    load: () => import('./Petemoss') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Petit Formal Script',
    importName: 'PetitFormalScript',
    load: () => import('./PetitFormalScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Petrona',
    importName: 'Petrona',
    load: () => import('./Petrona') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Philosopher',
    importName: 'Philosopher',
    load: () => import('./Philosopher') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Phudu',
    importName: 'Phudu',
    load: () => import('./Phudu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Piazzolla',
    importName: 'Piazzolla',
    load: () => import('./Piazzolla') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Piedra',
    importName: 'Piedra',
    load: () => import('./Piedra') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pinyon Script',
    importName: 'PinyonScript',
    load: () => import('./PinyonScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pirata One',
    importName: 'PirataOne',
    load: () => import('./PirataOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pixelify Sans',
    importName: 'PixelifySans',
    load: () => import('./PixelifySans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Plaster',
    importName: 'Plaster',
    load: () => import('./Plaster') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Play',
    importName: 'Play',
    load: () => import('./Play') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Playball',
    importName: 'Playball',
    load: () => import('./Playball') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Playfair',
    importName: 'Playfair',
    load: () => import('./Playfair') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Playfair Display',
    importName: 'PlayfairDisplay',
    load: () => import('./PlayfairDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Playfair Display SC',
    importName: 'PlayfairDisplaySC',
    load: () => import('./PlayfairDisplaySC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Playpen Sans',
    importName: 'PlaypenSans',
    load: () => import('./PlaypenSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Plus Jakarta Sans',
    importName: 'PlusJakartaSans',
    load: () => import('./PlusJakartaSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Podkova',
    importName: 'Podkova',
    load: () => import('./Podkova') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Poiret One',
    importName: 'PoiretOne',
    load: () => import('./PoiretOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Poller One',
    importName: 'PollerOne',
    load: () => import('./PollerOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Poltawski Nowy',
    importName: 'PoltawskiNowy',
    load: () => import('./PoltawskiNowy') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Poly',
    importName: 'Poly',
    load: () => import('./Poly') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pompiere',
    importName: 'Pompiere',
    load: () => import('./Pompiere') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pontano Sans',
    importName: 'PontanoSans',
    load: () => import('./PontanoSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Poor Story',
    importName: 'PoorStory',
    load: () => import('./PoorStory') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Poppins',
    importName: 'Poppins',
    load: () => import('./Poppins') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Port Lligat Sans',
    importName: 'PortLligatSans',
    load: () => import('./PortLligatSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Port Lligat Slab',
    importName: 'PortLligatSlab',
    load: () => import('./PortLligatSlab') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Potta One',
    importName: 'PottaOne',
    load: () => import('./PottaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pragati Narrow',
    importName: 'PragatiNarrow',
    load: () => import('./PragatiNarrow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Praise',
    importName: 'Praise',
    load: () => import('./Praise') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Prata',
    importName: 'Prata',
    load: () => import('./Prata') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Preahvihear',
    importName: 'Preahvihear',
    load: () => import('./Preahvihear') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Press Start 2P',
    importName: 'PressStart2P',
    load: () => import('./PressStart2P') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Pridi',
    importName: 'Pridi',
    load: () => import('./Pridi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Princess Sofia',
    importName: 'PrincessSofia',
    load: () => import('./PrincessSofia') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Prociono',
    importName: 'Prociono',
    load: () => import('./Prociono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Prompt',
    importName: 'Prompt',
    load: () => import('./Prompt') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Prosto One',
    importName: 'ProstoOne',
    load: () => import('./ProstoOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Proza Libre',
    importName: 'ProzaLibre',
    load: () => import('./ProzaLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Public Sans',
    importName: 'PublicSans',
    load: () => import('./PublicSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Puppies Play',
    importName: 'PuppiesPlay',
    load: () => import('./PuppiesPlay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Puritan',
    importName: 'Puritan',
    load: () => import('./Puritan') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Purple Purse',
    importName: 'PurplePurse',
    load: () => import('./PurplePurse') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Qahiri',
    importName: 'Qahiri',
    load: () => import('./Qahiri') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Quando',
    importName: 'Quando',
    load: () => import('./Quando') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Quantico',
    importName: 'Quantico',
    load: () => import('./Quantico') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Quattrocento',
    importName: 'Quattrocento',
    load: () => import('./Quattrocento') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Quattrocento Sans',
    importName: 'QuattrocentoSans',
    load: () => import('./QuattrocentoSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Questrial',
    importName: 'Questrial',
    load: () => import('./Questrial') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Quicksand',
    importName: 'Quicksand',
    load: () => import('./Quicksand') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Quintessential',
    importName: 'Quintessential',
    load: () => import('./Quintessential') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Qwigley',
    importName: 'Qwigley',
    load: () => import('./Qwigley') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Qwitcher Grypen',
    importName: 'QwitcherGrypen',
    load: () => import('./QwitcherGrypen') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'REM',
    importName: 'REM',
    load: () => import('./REM') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Racing Sans One',
    importName: 'RacingSansOne',
    load: () => import('./RacingSansOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Radio Canada',
    importName: 'RadioCanada',
    load: () => import('./RadioCanada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Radley',
    importName: 'Radley',
    load: () => import('./Radley') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rajdhani',
    importName: 'Rajdhani',
    load: () => import('./Rajdhani') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rakkas',
    importName: 'Rakkas',
    load: () => import('./Rakkas') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Raleway',
    importName: 'Raleway',
    load: () => import('./Raleway') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Raleway Dots',
    importName: 'RalewayDots',
    load: () => import('./RalewayDots') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ramabhadra',
    importName: 'Ramabhadra',
    load: () => import('./Ramabhadra') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ramaraja',
    importName: 'Ramaraja',
    load: () => import('./Ramaraja') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rambla',
    importName: 'Rambla',
    load: () => import('./Rambla') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rammetto One',
    importName: 'RammettoOne',
    load: () => import('./RammettoOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rampart One',
    importName: 'RampartOne',
    load: () => import('./RampartOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ranchers',
    importName: 'Ranchers',
    load: () => import('./Ranchers') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rancho',
    importName: 'Rancho',
    load: () => import('./Rancho') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ranga',
    importName: 'Ranga',
    load: () => import('./Ranga') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rasa',
    importName: 'Rasa',
    load: () => import('./Rasa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rationale',
    importName: 'Rationale',
    load: () => import('./Rationale') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ravi Prakash',
    importName: 'RaviPrakash',
    load: () => import('./RaviPrakash') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Readex Pro',
    importName: 'ReadexPro',
    load: () => import('./ReadexPro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Recursive',
    importName: 'Recursive',
    load: () => import('./Recursive') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Red Hat Display',
    importName: 'RedHatDisplay',
    load: () => import('./RedHatDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Red Hat Mono',
    importName: 'RedHatMono',
    load: () => import('./RedHatMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Red Hat Text',
    importName: 'RedHatText',
    load: () => import('./RedHatText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Red Rose',
    importName: 'RedRose',
    load: () => import('./RedRose') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Redacted',
    importName: 'Redacted',
    load: () => import('./Redacted') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Redacted Script',
    importName: 'RedactedScript',
    load: () => import('./RedactedScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Redressed',
    importName: 'Redressed',
    load: () => import('./Redressed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Reem Kufi',
    importName: 'ReemKufi',
    load: () => import('./ReemKufi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Reem Kufi Fun',
    importName: 'ReemKufiFun',
    load: () => import('./ReemKufiFun') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Reem Kufi Ink',
    importName: 'ReemKufiInk',
    load: () => import('./ReemKufiInk') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Reenie Beanie',
    importName: 'ReenieBeanie',
    load: () => import('./ReenieBeanie') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Reggae One',
    importName: 'ReggaeOne',
    load: () => import('./ReggaeOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Revalia',
    importName: 'Revalia',
    load: () => import('./Revalia') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rhodium Libre',
    importName: 'RhodiumLibre',
    load: () => import('./RhodiumLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ribeye',
    importName: 'Ribeye',
    load: () => import('./Ribeye') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ribeye Marrow',
    importName: 'RibeyeMarrow',
    load: () => import('./RibeyeMarrow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Righteous',
    importName: 'Righteous',
    load: () => import('./Righteous') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Risque',
    importName: 'Risque',
    load: () => import('./Risque') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Road Rage',
    importName: 'RoadRage',
    load: () => import('./RoadRage') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Roboto',
    importName: 'Roboto',
    load: () => import('./Roboto') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Roboto Condensed',
    importName: 'RobotoCondensed',
    load: () => import('./RobotoCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Roboto Flex',
    importName: 'RobotoFlex',
    load: () => import('./RobotoFlex') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Roboto Mono',
    importName: 'RobotoMono',
    load: () => import('./RobotoMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Roboto Serif',
    importName: 'RobotoSerif',
    load: () => import('./RobotoSerif') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Roboto Slab',
    importName: 'RobotoSlab',
    load: () => import('./RobotoSlab') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rochester',
    importName: 'Rochester',
    load: () => import('./Rochester') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rock 3D',
    importName: 'Rock3D',
    load: () => import('./Rock3D') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rock Salt',
    importName: 'RockSalt',
    load: () => import('./RockSalt') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'RocknRoll One',
    importName: 'RocknRollOne',
    load: () => import('./RocknRollOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rokkitt',
    importName: 'Rokkitt',
    load: () => import('./Rokkitt') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Romanesco',
    importName: 'Romanesco',
    load: () => import('./Romanesco') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ropa Sans',
    importName: 'RopaSans',
    load: () => import('./RopaSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rosario',
    importName: 'Rosario',
    load: () => import('./Rosario') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rosarivo',
    importName: 'Rosarivo',
    load: () => import('./Rosarivo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rouge Script',
    importName: 'RougeScript',
    load: () => import('./RougeScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rowdies',
    importName: 'Rowdies',
    load: () => import('./Rowdies') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rozha One',
    importName: 'RozhaOne',
    load: () => import('./RozhaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik',
    importName: 'Rubik',
    load: () => import('./Rubik') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik 80s Fade',
    importName: 'Rubik80sFade',
    load: () => import('./Rubik80sFade') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Beastly',
    importName: 'RubikBeastly',
    load: () => import('./RubikBeastly') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Bubbles',
    importName: 'RubikBubbles',
    load: () => import('./RubikBubbles') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Burned',
    importName: 'RubikBurned',
    load: () => import('./RubikBurned') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Dirt',
    importName: 'RubikDirt',
    load: () => import('./RubikDirt') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Distressed',
    importName: 'RubikDistressed',
    load: () => import('./RubikDistressed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Gemstones',
    importName: 'RubikGemstones',
    load: () => import('./RubikGemstones') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Glitch',
    importName: 'RubikGlitch',
    load: () => import('./RubikGlitch') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Iso',
    importName: 'RubikIso',
    load: () => import('./RubikIso') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Marker Hatch',
    importName: 'RubikMarkerHatch',
    load: () => import('./RubikMarkerHatch') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Maze',
    importName: 'RubikMaze',
    load: () => import('./RubikMaze') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Microbe',
    importName: 'RubikMicrobe',
    load: () => import('./RubikMicrobe') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Mono One',
    importName: 'RubikMonoOne',
    load: () => import('./RubikMonoOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Moonrocks',
    importName: 'RubikMoonrocks',
    load: () => import('./RubikMoonrocks') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Pixels',
    importName: 'RubikPixels',
    load: () => import('./RubikPixels') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Puddles',
    importName: 'RubikPuddles',
    load: () => import('./RubikPuddles') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Spray Paint',
    importName: 'RubikSprayPaint',
    load: () => import('./RubikSprayPaint') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Storm',
    importName: 'RubikStorm',
    load: () => import('./RubikStorm') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Vinyl',
    importName: 'RubikVinyl',
    load: () => import('./RubikVinyl') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rubik Wet Paint',
    importName: 'RubikWetPaint',
    load: () => import('./RubikWetPaint') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ruda',
    importName: 'Ruda',
    load: () => import('./Ruda') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rufina',
    importName: 'Rufina',
    load: () => import('./Rufina') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ruge Boogie',
    importName: 'RugeBoogie',
    load: () => import('./RugeBoogie') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ruluko',
    importName: 'Ruluko',
    load: () => import('./Ruluko') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rum Raisin',
    importName: 'RumRaisin',
    load: () => import('./RumRaisin') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ruslan Display',
    importName: 'RuslanDisplay',
    load: () => import('./RuslanDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Russo One',
    importName: 'RussoOne',
    load: () => import('./RussoOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ruthie',
    importName: 'Ruthie',
    load: () => import('./Ruthie') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ruwudu',
    importName: 'Ruwudu',
    load: () => import('./Ruwudu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Rye',
    importName: 'Rye',
    load: () => import('./Rye') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'STIX Two Text',
    importName: 'STIXTwoText',
    load: () => import('./STIXTwoText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sacramento',
    importName: 'Sacramento',
    load: () => import('./Sacramento') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sahitya',
    importName: 'Sahitya',
    load: () => import('./Sahitya') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sail',
    importName: 'Sail',
    load: () => import('./Sail') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Saira',
    importName: 'Saira',
    load: () => import('./Saira') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Saira Condensed',
    importName: 'SairaCondensed',
    load: () => import('./SairaCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Saira Extra Condensed',
    importName: 'SairaExtraCondensed',
    load: () => import('./SairaExtraCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Saira Semi Condensed',
    importName: 'SairaSemiCondensed',
    load: () => import('./SairaSemiCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Saira Stencil One',
    importName: 'SairaStencilOne',
    load: () => import('./SairaStencilOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Salsa',
    importName: 'Salsa',
    load: () => import('./Salsa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sanchez',
    importName: 'Sanchez',
    load: () => import('./Sanchez') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sancreek',
    importName: 'Sancreek',
    load: () => import('./Sancreek') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sansita',
    importName: 'Sansita',
    load: () => import('./Sansita') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sansita Swashed',
    importName: 'SansitaSwashed',
    load: () => import('./SansitaSwashed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sarabun',
    importName: 'Sarabun',
    load: () => import('./Sarabun') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sarala',
    importName: 'Sarala',
    load: () => import('./Sarala') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sarina',
    importName: 'Sarina',
    load: () => import('./Sarina') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sarpanch',
    importName: 'Sarpanch',
    load: () => import('./Sarpanch') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sassy Frass',
    importName: 'SassyFrass',
    load: () => import('./SassyFrass') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Satisfy',
    importName: 'Satisfy',
    load: () => import('./Satisfy') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sawarabi Gothic',
    importName: 'SawarabiGothic',
    load: () => import('./SawarabiGothic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sawarabi Mincho',
    importName: 'SawarabiMincho',
    load: () => import('./SawarabiMincho') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Scada',
    importName: 'Scada',
    load: () => import('./Scada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Scheherazade New',
    importName: 'ScheherazadeNew',
    load: () => import('./ScheherazadeNew') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Schibsted Grotesk',
    importName: 'SchibstedGrotesk',
    load: () => import('./SchibstedGrotesk') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Schoolbell',
    importName: 'Schoolbell',
    load: () => import('./Schoolbell') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Scope One',
    importName: 'ScopeOne',
    load: () => import('./ScopeOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Seaweed Script',
    importName: 'SeaweedScript',
    load: () => import('./SeaweedScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Secular One',
    importName: 'SecularOne',
    load: () => import('./SecularOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sedgwick Ave',
    importName: 'SedgwickAve',
    load: () => import('./SedgwickAve') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sedgwick Ave Display',
    importName: 'SedgwickAveDisplay',
    load: () => import('./SedgwickAveDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sen',
    importName: 'Sen',
    load: () => import('./Sen') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Send Flowers',
    importName: 'SendFlowers',
    load: () => import('./SendFlowers') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sevillana',
    importName: 'Sevillana',
    load: () => import('./Sevillana') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Seymour One',
    importName: 'SeymourOne',
    load: () => import('./SeymourOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shadows Into Light',
    importName: 'ShadowsIntoLight',
    load: () => import('./ShadowsIntoLight') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shadows Into Light Two',
    importName: 'ShadowsIntoLightTwo',
    load: () => import('./ShadowsIntoLightTwo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shalimar',
    importName: 'Shalimar',
    load: () => import('./Shalimar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shantell Sans',
    importName: 'ShantellSans',
    load: () => import('./ShantellSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shanti',
    importName: 'Shanti',
    load: () => import('./Shanti') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Share',
    importName: 'Share',
    load: () => import('./Share') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Share Tech',
    importName: 'ShareTech',
    load: () => import('./ShareTech') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Share Tech Mono',
    importName: 'ShareTechMono',
    load: () => import('./ShareTechMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shippori Antique',
    importName: 'ShipporiAntique',
    load: () => import('./ShipporiAntique') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shippori Antique B1',
    importName: 'ShipporiAntiqueB1',
    load: () => import('./ShipporiAntiqueB1') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shippori Mincho',
    importName: 'ShipporiMincho',
    load: () => import('./ShipporiMincho') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shippori Mincho B1',
    importName: 'ShipporiMinchoB1',
    load: () => import('./ShipporiMinchoB1') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shizuru',
    importName: 'Shizuru',
    load: () => import('./Shizuru') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shojumaru',
    importName: 'Shojumaru',
    load: () => import('./Shojumaru') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Short Stack',
    importName: 'ShortStack',
    load: () => import('./ShortStack') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Shrikhand',
    importName: 'Shrikhand',
    load: () => import('./Shrikhand') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Siemreap',
    importName: 'Siemreap',
    load: () => import('./Siemreap') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sigmar',
    importName: 'Sigmar',
    load: () => import('./Sigmar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sigmar One',
    importName: 'SigmarOne',
    load: () => import('./SigmarOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Signika',
    importName: 'Signika',
    load: () => import('./Signika') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Signika Negative',
    importName: 'SignikaNegative',
    load: () => import('./SignikaNegative') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Silkscreen',
    importName: 'Silkscreen',
    load: () => import('./Silkscreen') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Simonetta',
    importName: 'Simonetta',
    load: () => import('./Simonetta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Single Day',
    importName: 'SingleDay',
    load: () => import('./SingleDay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sintony',
    importName: 'Sintony',
    load: () => import('./Sintony') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sirin Stencil',
    importName: 'SirinStencil',
    load: () => import('./SirinStencil') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Six Caps',
    importName: 'SixCaps',
    load: () => import('./SixCaps') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Skranji',
    importName: 'Skranji',
    load: () => import('./Skranji') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Slabo 13px',
    importName: 'Slabo13px',
    load: () => import('./Slabo13px') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Slabo 27px',
    importName: 'Slabo27px',
    load: () => import('./Slabo27px') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Slackey',
    importName: 'Slackey',
    load: () => import('./Slackey') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Slackside One',
    importName: 'SlacksideOne',
    load: () => import('./SlacksideOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Smokum',
    importName: 'Smokum',
    load: () => import('./Smokum') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Smooch',
    importName: 'Smooch',
    load: () => import('./Smooch') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Smooch Sans',
    importName: 'SmoochSans',
    load: () => import('./SmoochSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Smythe',
    importName: 'Smythe',
    load: () => import('./Smythe') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sniglet',
    importName: 'Sniglet',
    load: () => import('./Sniglet') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Snippet',
    importName: 'Snippet',
    load: () => import('./Snippet') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Snowburst One',
    importName: 'SnowburstOne',
    load: () => import('./SnowburstOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sofadi One',
    importName: 'SofadiOne',
    load: () => import('./SofadiOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sofia',
    importName: 'Sofia',
    load: () => import('./Sofia') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sofia Sans',
    importName: 'SofiaSans',
    load: () => import('./SofiaSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sofia Sans Condensed',
    importName: 'SofiaSansCondensed',
    load: () => import('./SofiaSansCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sofia Sans Extra Condensed',
    importName: 'SofiaSansExtraCondensed',
    load: () => import('./SofiaSansExtraCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sofia Sans Semi Condensed',
    importName: 'SofiaSansSemiCondensed',
    load: () => import('./SofiaSansSemiCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Solitreo',
    importName: 'Solitreo',
    load: () => import('./Solitreo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Solway',
    importName: 'Solway',
    load: () => import('./Solway') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sometype Mono',
    importName: 'SometypeMono',
    load: () => import('./SometypeMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Song Myung',
    importName: 'SongMyung',
    load: () => import('./SongMyung') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sono',
    importName: 'Sono',
    load: () => import('./Sono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sonsie One',
    importName: 'SonsieOne',
    load: () => import('./SonsieOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sora',
    importName: 'Sora',
    load: () => import('./Sora') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sorts Mill Goudy',
    importName: 'SortsMillGoudy',
    load: () => import('./SortsMillGoudy') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Source Code Pro',
    importName: 'SourceCodePro',
    load: () => import('./SourceCodePro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Source Sans 3',
    importName: 'SourceSans3',
    load: () => import('./SourceSans3') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Source Serif 4',
    importName: 'SourceSerif4',
    load: () => import('./SourceSerif4') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Space Grotesk',
    importName: 'SpaceGrotesk',
    load: () => import('./SpaceGrotesk') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Space Mono',
    importName: 'SpaceMono',
    load: () => import('./SpaceMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Special Elite',
    importName: 'SpecialElite',
    load: () => import('./SpecialElite') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Spectral',
    importName: 'Spectral',
    load: () => import('./Spectral') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Spectral SC',
    importName: 'SpectralSC',
    load: () => import('./SpectralSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Spicy Rice',
    importName: 'SpicyRice',
    load: () => import('./SpicyRice') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Spinnaker',
    importName: 'Spinnaker',
    load: () => import('./Spinnaker') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Spirax',
    importName: 'Spirax',
    load: () => import('./Spirax') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Splash',
    importName: 'Splash',
    load: () => import('./Splash') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Spline Sans',
    importName: 'SplineSans',
    load: () => import('./SplineSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Spline Sans Mono',
    importName: 'SplineSansMono',
    load: () => import('./SplineSansMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Squada One',
    importName: 'SquadaOne',
    load: () => import('./SquadaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Square Peg',
    importName: 'SquarePeg',
    load: () => import('./SquarePeg') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sree Krushnadevaraya',
    importName: 'SreeKrushnadevaraya',
    load: () => import('./SreeKrushnadevaraya') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sriracha',
    importName: 'Sriracha',
    load: () => import('./Sriracha') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Srisakdi',
    importName: 'Srisakdi',
    load: () => import('./Srisakdi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Staatliches',
    importName: 'Staatliches',
    load: () => import('./Staatliches') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Stalemate',
    importName: 'Stalemate',
    load: () => import('./Stalemate') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Stalinist One',
    importName: 'StalinistOne',
    load: () => import('./StalinistOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Stardos Stencil',
    importName: 'StardosStencil',
    load: () => import('./StardosStencil') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Stick',
    importName: 'Stick',
    load: () => import('./Stick') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Stick No Bills',
    importName: 'StickNoBills',
    load: () => import('./StickNoBills') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Stint Ultra Condensed',
    importName: 'StintUltraCondensed',
    load: () => import('./StintUltraCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Stint Ultra Expanded',
    importName: 'StintUltraExpanded',
    load: () => import('./StintUltraExpanded') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Stoke',
    importName: 'Stoke',
    load: () => import('./Stoke') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Strait',
    importName: 'Strait',
    load: () => import('./Strait') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Style Script',
    importName: 'StyleScript',
    load: () => import('./StyleScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Stylish',
    importName: 'Stylish',
    load: () => import('./Stylish') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sue Ellen Francisco',
    importName: 'SueEllenFrancisco',
    load: () => import('./SueEllenFrancisco') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Suez One',
    importName: 'SuezOne',
    load: () => import('./SuezOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sulphur Point',
    importName: 'SulphurPoint',
    load: () => import('./SulphurPoint') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sumana',
    importName: 'Sumana',
    load: () => import('./Sumana') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sunflower',
    importName: 'Sunflower',
    load: () => import('./Sunflower') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sunshiney',
    importName: 'Sunshiney',
    load: () => import('./Sunshiney') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Supermercado One',
    importName: 'SupermercadoOne',
    load: () => import('./SupermercadoOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Sura',
    importName: 'Sura',
    load: () => import('./Sura') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Suranna',
    importName: 'Suranna',
    load: () => import('./Suranna') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Suravaram',
    importName: 'Suravaram',
    load: () => import('./Suravaram') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Suwannaphum',
    importName: 'Suwannaphum',
    load: () => import('./Suwannaphum') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Swanky and Moo Moo',
    importName: 'SwankyandMooMoo',
    load: () => import('./SwankyandMooMoo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Syncopate',
    importName: 'Syncopate',
    load: () => import('./Syncopate') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Syne',
    importName: 'Syne',
    load: () => import('./Syne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Syne Mono',
    importName: 'SyneMono',
    load: () => import('./SyneMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Syne Tactile',
    importName: 'SyneTactile',
    load: () => import('./SyneTactile') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tai Heritage Pro',
    importName: 'TaiHeritagePro',
    load: () => import('./TaiHeritagePro') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tajawal',
    importName: 'Tajawal',
    load: () => import('./Tajawal') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tangerine',
    importName: 'Tangerine',
    load: () => import('./Tangerine') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tapestry',
    importName: 'Tapestry',
    load: () => import('./Tapestry') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Taprom',
    importName: 'Taprom',
    load: () => import('./Taprom') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tauri',
    importName: 'Tauri',
    load: () => import('./Tauri') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Taviraj',
    importName: 'Taviraj',
    load: () => import('./Taviraj') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Teko',
    importName: 'Teko',
    load: () => import('./Teko') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tektur',
    importName: 'Tektur',
    load: () => import('./Tektur') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Telex',
    importName: 'Telex',
    load: () => import('./Telex') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tenali Ramakrishna',
    importName: 'TenaliRamakrishna',
    load: () => import('./TenaliRamakrishna') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tenor Sans',
    importName: 'TenorSans',
    load: () => import('./TenorSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Text Me One',
    importName: 'TextMeOne',
    load: () => import('./TextMeOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Texturina',
    importName: 'Texturina',
    load: () => import('./Texturina') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Thasadith',
    importName: 'Thasadith',
    load: () => import('./Thasadith') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'The Girl Next Door',
    importName: 'TheGirlNextDoor',
    load: () => import('./TheGirlNextDoor') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'The Nautigal',
    importName: 'TheNautigal',
    load: () => import('./TheNautigal') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tienne',
    importName: 'Tienne',
    load: () => import('./Tienne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tillana',
    importName: 'Tillana',
    load: () => import('./Tillana') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tilt Neon',
    importName: 'TiltNeon',
    load: () => import('./TiltNeon') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tilt Prism',
    importName: 'TiltPrism',
    load: () => import('./TiltPrism') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tilt Warp',
    importName: 'TiltWarp',
    load: () => import('./TiltWarp') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Timmana',
    importName: 'Timmana',
    load: () => import('./Timmana') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tinos',
    importName: 'Tinos',
    load: () => import('./Tinos') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tiro Bangla',
    importName: 'TiroBangla',
    load: () => import('./TiroBangla') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tiro Devanagari Hindi',
    importName: 'TiroDevanagariHindi',
    load: () => import('./TiroDevanagariHindi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tiro Devanagari Marathi',
    importName: 'TiroDevanagariMarathi',
    load: () => import('./TiroDevanagariMarathi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tiro Devanagari Sanskrit',
    importName: 'TiroDevanagariSanskrit',
    load: () => import('./TiroDevanagariSanskrit') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tiro Gurmukhi',
    importName: 'TiroGurmukhi',
    load: () => import('./TiroGurmukhi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tiro Kannada',
    importName: 'TiroKannada',
    load: () => import('./TiroKannada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tiro Tamil',
    importName: 'TiroTamil',
    load: () => import('./TiroTamil') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tiro Telugu',
    importName: 'TiroTelugu',
    load: () => import('./TiroTelugu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Titan One',
    importName: 'TitanOne',
    load: () => import('./TitanOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Titillium Web',
    importName: 'TitilliumWeb',
    load: () => import('./TitilliumWeb') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tomorrow',
    importName: 'Tomorrow',
    load: () => import('./Tomorrow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tourney',
    importName: 'Tourney',
    load: () => import('./Tourney') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Trade Winds',
    importName: 'TradeWinds',
    load: () => import('./TradeWinds') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Train One',
    importName: 'TrainOne',
    load: () => import('./TrainOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Trirong',
    importName: 'Trirong',
    load: () => import('./Trirong') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Trispace',
    importName: 'Trispace',
    load: () => import('./Trispace') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Trocchi',
    importName: 'Trocchi',
    load: () => import('./Trocchi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Trochut',
    importName: 'Trochut',
    load: () => import('./Trochut') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Truculenta',
    importName: 'Truculenta',
    load: () => import('./Truculenta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Trykker',
    importName: 'Trykker',
    load: () => import('./Trykker') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tsukimi Rounded',
    importName: 'TsukimiRounded',
    load: () => import('./TsukimiRounded') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Tulpen One',
    importName: 'TulpenOne',
    load: () => import('./TulpenOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Turret Road',
    importName: 'TurretRoad',
    load: () => import('./TurretRoad') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Twinkle Star',
    importName: 'TwinkleStar',
    load: () => import('./TwinkleStar') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ubuntu',
    importName: 'Ubuntu',
    load: () => import('./Ubuntu') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ubuntu Condensed',
    importName: 'UbuntuCondensed',
    load: () => import('./UbuntuCondensed') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ubuntu Mono',
    importName: 'UbuntuMono',
    load: () => import('./UbuntuMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Uchen',
    importName: 'Uchen',
    load: () => import('./Uchen') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ultra',
    importName: 'Ultra',
    load: () => import('./Ultra') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Unbounded',
    importName: 'Unbounded',
    load: () => import('./Unbounded') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Uncial Antiqua',
    importName: 'UncialAntiqua',
    load: () => import('./UncialAntiqua') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Underdog',
    importName: 'Underdog',
    load: () => import('./Underdog') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Unica One',
    importName: 'UnicaOne',
    load: () => import('./UnicaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'UnifrakturCook',
    importName: 'UnifrakturCook',
    load: () => import('./UnifrakturCook') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'UnifrakturMaguntia',
    importName: 'UnifrakturMaguntia',
    load: () => import('./UnifrakturMaguntia') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Unkempt',
    importName: 'Unkempt',
    load: () => import('./Unkempt') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Unlock',
    importName: 'Unlock',
    load: () => import('./Unlock') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Unna',
    importName: 'Unna',
    load: () => import('./Unna') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Updock',
    importName: 'Updock',
    load: () => import('./Updock') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Urbanist',
    importName: 'Urbanist',
    load: () => import('./Urbanist') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'VT323',
    importName: 'VT323',
    load: () => import('./VT323') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vampiro One',
    importName: 'VampiroOne',
    load: () => import('./VampiroOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Varela',
    importName: 'Varela',
    load: () => import('./Varela') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Varela Round',
    importName: 'VarelaRound',
    load: () => import('./VarelaRound') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Varta',
    importName: 'Varta',
    load: () => import('./Varta') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vast Shadow',
    importName: 'VastShadow',
    load: () => import('./VastShadow') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vazirmatn',
    importName: 'Vazirmatn',
    load: () => import('./Vazirmatn') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vesper Libre',
    importName: 'VesperLibre',
    load: () => import('./VesperLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Viaoda Libre',
    importName: 'ViaodaLibre',
    load: () => import('./ViaodaLibre') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vibes',
    importName: 'Vibes',
    load: () => import('./Vibes') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vibur',
    importName: 'Vibur',
    load: () => import('./Vibur') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Victor Mono',
    importName: 'VictorMono',
    load: () => import('./VictorMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vidaloka',
    importName: 'Vidaloka',
    load: () => import('./Vidaloka') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Viga',
    importName: 'Viga',
    load: () => import('./Viga') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vina Sans',
    importName: 'VinaSans',
    load: () => import('./VinaSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Voces',
    importName: 'Voces',
    load: () => import('./Voces') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Volkhov',
    importName: 'Volkhov',
    load: () => import('./Volkhov') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vollkorn',
    importName: 'Vollkorn',
    load: () => import('./Vollkorn') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vollkorn SC',
    importName: 'VollkornSC',
    load: () => import('./VollkornSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Voltaire',
    importName: 'Voltaire',
    load: () => import('./Voltaire') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Vujahday Script',
    importName: 'VujahdayScript',
    load: () => import('./VujahdayScript') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Waiting for the Sunrise',
    importName: 'WaitingfortheSunrise',
    load: () => import('./WaitingfortheSunrise') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Wallpoet',
    importName: 'Wallpoet',
    load: () => import('./Wallpoet') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Walter Turncoat',
    importName: 'WalterTurncoat',
    load: () => import('./WalterTurncoat') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Warnes',
    importName: 'Warnes',
    load: () => import('./Warnes') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Water Brush',
    importName: 'WaterBrush',
    load: () => import('./WaterBrush') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Waterfall',
    importName: 'Waterfall',
    load: () => import('./Waterfall') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Wellfleet',
    importName: 'Wellfleet',
    load: () => import('./Wellfleet') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Wendy One',
    importName: 'WendyOne',
    load: () => import('./WendyOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Whisper',
    importName: 'Whisper',
    load: () => import('./Whisper') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'WindSong',
    importName: 'WindSong',
    load: () => import('./WindSong') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Wire One',
    importName: 'WireOne',
    load: () => import('./WireOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Wix Madefor Display',
    importName: 'WixMadeforDisplay',
    load: () => import('./WixMadeforDisplay') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Wix Madefor Text',
    importName: 'WixMadeforText',
    load: () => import('./WixMadeforText') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Work Sans',
    importName: 'WorkSans',
    load: () => import('./WorkSans') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Xanh Mono',
    importName: 'XanhMono',
    load: () => import('./XanhMono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yaldevi',
    importName: 'Yaldevi',
    load: () => import('./Yaldevi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yanone Kaffeesatz',
    importName: 'YanoneKaffeesatz',
    load: () => import('./YanoneKaffeesatz') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yantramanav',
    importName: 'Yantramanav',
    load: () => import('./Yantramanav') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yatra One',
    importName: 'YatraOne',
    load: () => import('./YatraOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yellowtail',
    importName: 'Yellowtail',
    load: () => import('./Yellowtail') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yeon Sung',
    importName: 'YeonSung',
    load: () => import('./YeonSung') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yeseva One',
    importName: 'YesevaOne',
    load: () => import('./YesevaOne') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yesteryear',
    importName: 'Yesteryear',
    load: () => import('./Yesteryear') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yomogi',
    importName: 'Yomogi',
    load: () => import('./Yomogi') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Young Serif',
    importName: 'YoungSerif',
    load: () => import('./YoungSerif') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yrsa',
    importName: 'Yrsa',
    load: () => import('./Yrsa') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ysabeau',
    importName: 'Ysabeau',
    load: () => import('./Ysabeau') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ysabeau Infant',
    importName: 'YsabeauInfant',
    load: () => import('./YsabeauInfant') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ysabeau Office',
    importName: 'YsabeauOffice',
    load: () => import('./YsabeauOffice') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Ysabeau SC',
    importName: 'YsabeauSC',
    load: () => import('./YsabeauSC') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yuji Boku',
    importName: 'YujiBoku',
    load: () => import('./YujiBoku') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yuji Hentaigana Akari',
    importName: 'YujiHentaiganaAkari',
    load: () => import('./YujiHentaiganaAkari') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yuji Hentaigana Akebono',
    importName: 'YujiHentaiganaAkebono',
    load: () => import('./YujiHentaiganaAkebono') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yuji Mai',
    importName: 'YujiMai',
    load: () => import('./YujiMai') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yuji Syuku',
    importName: 'YujiSyuku',
    load: () => import('./YujiSyuku') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Yusei Magic',
    importName: 'YuseiMagic',
    load: () => import('./YuseiMagic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'ZCOOL KuaiLe',
    importName: 'ZCOOLKuaiLe',
    load: () => import('./ZCOOLKuaiLe') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'ZCOOL QingKe HuangYou',
    importName: 'ZCOOLQingKeHuangYou',
    load: () => import('./ZCOOLQingKeHuangYou') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'ZCOOL XiaoWei',
    importName: 'ZCOOLXiaoWei',
    load: () => import('./ZCOOLXiaoWei') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zen Antique',
    importName: 'ZenAntique',
    load: () => import('./ZenAntique') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zen Antique Soft',
    importName: 'ZenAntiqueSoft',
    load: () => import('./ZenAntiqueSoft') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zen Dots',
    importName: 'ZenDots',
    load: () => import('./ZenDots') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zen Kaku Gothic Antique',
    importName: 'ZenKakuGothicAntique',
    load: () => import('./ZenKakuGothicAntique') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zen Kaku Gothic New',
    importName: 'ZenKakuGothicNew',
    load: () => import('./ZenKakuGothicNew') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zen Kurenaido',
    importName: 'ZenKurenaido',
    load: () => import('./ZenKurenaido') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zen Loop',
    importName: 'ZenLoop',
    load: () => import('./ZenLoop') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zen Maru Gothic',
    importName: 'ZenMaruGothic',
    load: () => import('./ZenMaruGothic') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zen Old Mincho',
    importName: 'ZenOldMincho',
    load: () => import('./ZenOldMincho') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zen Tokyo Zoo',
    importName: 'ZenTokyoZoo',
    load: () => import('./ZenTokyoZoo') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zeyada',
    importName: 'Zeyada',
    load: () => import('./Zeyada') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zhi Mang Xing',
    importName: 'ZhiMangXing',
    load: () => import('./ZhiMangXing') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zilla Slab',
    importName: 'ZillaSlab',
    load: () => import('./ZillaSlab') as Promise<GoogleFont>,
  },
  {
    fontFamily: 'Zilla Slab Highlight',
    importName: 'ZillaSlabHighlight',
    load: () => import('./ZillaSlabHighlight') as Promise<GoogleFont>,
  },
];
