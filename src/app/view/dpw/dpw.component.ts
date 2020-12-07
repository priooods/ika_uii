import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  no: number;
  name: any;
  fakultas: any;
  angkatan: number;
  pekerjaan: any;
  domisili: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
{no:1,name:"Peni Inggriani, SH.",fakultas:"Hukum",angkatan:1994,pekerjaan:"Notaris PPAT",domisili:"Kota Cilegon"},
{no:2,name:"Faizal Irawan, SH.",fakultas:"Hukum",angkatan:1994,pekerjaan:"Notaris PPAT",domisili:"Kab Tangerang"},
{no:3,name:"Siffa Widiastama",fakultas:"Ekonomi",angkatan:2001,pekerjaan:"Wiraswasta",domisili:"Kota Serang"},
{no:4,name:"Yulian Ikhram",fakultas:"Teknik Industri",angkatan:1998,pekerjaan:"Karyawan swasta",domisili:"Kota Cilegon"},
{no:5,name:"Eka Agung Sulistyaningsih",fakultas:"MIPA Farmasi ",angkatan:1998,pekerjaan:"Ibu rumah tangga",domisili:"Tangerang Selatan"},
{no:6,name:"Shinta Dewi Kartika",fakultas:"MIPA ",angkatan:2005,pekerjaan:"Dosen",domisili:"Kota Cilegon"},
{no:7,name:"Dwi Mulyantoro",fakultas:"Teknik Sipil dan Perencanaan",angkatan:1994,pekerjaan:"Pegawai Swasta",domisili:"Kota Tangerang"},
{no:8,name:"Asep Fauzan Al Fikri",fakultas:"Ekonomi",angkatan:1998,pekerjaan:"Swasta",domisili:"Kota Serang"},
{no:9,name:"Agung Usman Ismail",fakultas:"Ekonomi",angkatan:2009,pekerjaan:"Banker",domisili:"Tangerang Selatan"},
{no:10,name:"Arifuddin Muchtar",fakultas:"Ekonomi",angkatan:1991,pekerjaan:"Wirausaha",domisili:"Kab Tangerang"},
{no:11,name:"Heriyadi Rahmad, SH",fakultas:"Hukum",angkatan:1987,pekerjaan:"Notaris PPAT",domisili:"Tangerang Selatan"},
{no:12,name:"Aryo Priyambodo",fakultas:"Ekonomi",angkatan:1998,pekerjaan:"Swasta",domisili:"Tangerang Selatan"},
{no:13,name:"Lintang Purba Jaya",fakultas:"MIPA Farmasi ",angkatan:2003,pekerjaan:"ASN",domisili:"Kota Serang"},
{no:14,name:"Ita Yulistiawati",fakultas:"Hukum",angkatan:1995,pekerjaan:"PNS pada Biro Hukum Provinsi Banten",domisili:"Kota Serang"},
{no:15,name:"Subiyakto",fakultas:"Teknik Sipil dan Perencanaan",angkatan:1987,pekerjaan:"Karyawan Swasta",domisili:"Kota Serang"},
{no:16,name:"Faizal Irawan, SH.",fakultas:"Hukum",angkatan:1996,pekerjaan:"Karyawati (Bank Mandiri)",domisili:"Kab Tangerang"},
{no:17,name:"Siffa Widiastama",fakultas:"MIPA",angkatan:2005,pekerjaan:"Apoteker ",domisili:"Kota Tangerang"},
{no:18,name:"Yulian Ikhram",fakultas:"MIPA",angkatan:1998,pekerjaan:"Apoteker",domisili:"Kota Serang"},
{no:19,name:"Eka Agung Sulistyaningsih",fakultas:"Hukum",angkatan:2003,pekerjaan:"Notaris PPAT ",domisili:"Tangerang Selatan"},
{no:20,name:"Shinta Dewi Kartika",fakultas:"Ekonomi",angkatan:1990,pekerjaan:"Dosen",domisili:"Kab Tangerang"},
{no:21,name:"Dwi Mulyantoro",fakultas:"MIPA Farmasi",angkatan:1999,pekerjaan:"PNS",domisili:"Kab Pandeglang"},
{no:22,name:"Asep Fauzan Al Fikri",fakultas:"Ekonomi ",angkatan:1987,pekerjaan:"Konsultan Pajak ",domisili:"Tangerang Selatan"},
{no:23,name:"Agung Usman Ismail",fakultas:"Hukum",angkatan:1996,pekerjaan:"Swasta",domisili:"Kab Tangerang"},
{no:24,name:"Arifuddin Muchtar",fakultas:"Ekonomi",angkatan:1994,pekerjaan:"PNS ",domisili:"Kota Serang"},
{no:25,name:"Heriyadi Rahmad, SH",fakultas:"Hukum",angkatan:2001,pekerjaan:"Polri",domisili:"Tangerang Selatan"},
{no:26,name:"Aryo Priyambodo",fakultas:"Teknik Industri ",angkatan:1992,pekerjaan:"ASN pada Badan Standardisasi Nasional",domisili:"Kab Tangerang"},
{no:27,name:"Lintang Purba Jaya",fakultas:"Teknik Sipil dan Perencanaan",angkatan:1999,pekerjaan:"Pegawai BUMN",domisili:"Kota Serang"},
{no:28,name:"Ita Yulistiawati",fakultas:"MIPA",angkatan:2014,pekerjaan:"Karyawan swasta",domisili:"Kab Pandeglang"},
{no:29,name:"Subiyakto",fakultas:"Hukum",angkatan:1987,pekerjaan:"Notaris PPAT",domisili:"Tangerang Selatan"},
{no:30,name:"Faizal Irawan, SH.",fakultas:"Teknik Industri",angkatan:1999,pekerjaan:"PT. Bank BRI Syariah",domisili:"Kota Tangerang"},
{no:31,name:"Siffa Widiastama",fakultas:"MIPA ",angkatan:2000,pekerjaan:"PNS",domisili:"Kota Tangerang"},
{no:32,name:"Yulian Ikhram",fakultas:"Teknik Industri",angkatan:1999,pekerjaan:"Karyawan Swasta",domisili:"Kota Cilegon"},
{no:33,name:"Eka Agung Sulistyaningsih",fakultas:"Teknik Industri",angkatan:1998,pekerjaan:"",domisili:"Kota Cilegon"},
{no:34,name:"Shinta Dewi Kartika",fakultas:"Teknik Industri",angkatan:1999,pekerjaan:"Karyawan Swasta",domisili:"Kota Cilegon"},
{no:35,name:"Dwi Mulyantoro",fakultas:"Teknik Industri",angkatan:1999,pekerjaan:"PNS",domisili:"Tangerang Selatan"},
{no:36,name:"Asep Fauzan Al Fikri",fakultas:"Teknik Informatika",angkatan:1999,pekerjaan:"Karyawan",domisili:"Tangerang Selatan"},
{no:37,name:"Agung Usman Ismail",fakultas:"Hukum",angkatan:1992,pekerjaan:"ASN Kemenkumham",domisili:"Kota Serang"},
{no:38,name:"Arifuddin Muchtar",fakultas:"Hukum",angkatan:1995,pekerjaan:"Advokat",domisili:"Kota Cilegon"},
{no:39,name:"Heriyadi Rahmad, SH",fakultas:"Hukum",angkatan:1997,pekerjaan:"Ibu Rumah Tangga",domisili:"Tangerang Selatan"},
{no:40,name:"Aryo Priyambodo",fakultas:"MIPA ",angkatan:2004,pekerjaan:"PNS",domisili:"Kab Pandeglang"},
{no:41,name:"Lintang Purba Jaya",fakultas:"Ekonomi",angkatan:2011,pekerjaan:"PNS Kementerian Hukum dan HAM",domisili:"Kota Serang"},
{no:42,name:"Ita Yulistiawati",fakultas:"Teknik Industri ",angkatan:1998,pekerjaan:"Karyawan BUMN",domisili:"Kota Tangerang"},
{no:43,name:"Subiyakto",fakultas:"Ekonomi",angkatan:2005,pekerjaan:"Swasta",domisili:"Kota Cilegon"},
{no:44,name:"Faizal Irawan, SH.",fakultas:"Teknik Sipil dan Perencanaan",angkatan:2000,pekerjaan:"Engineer",domisili:"Kota Cilegon"},
{no:45,name:"Siffa Widiastama",fakultas:"Ekonomi",angkatan:1998,pekerjaan:"",domisili:""},
{no:46,name:"Yulian Ikhram",fakultas:"Teknik Industri",angkatan:1998,pekerjaan:"Karyawan",domisili:"Tangerang Selatan"},
{no:47,name:"Eka Agung Sulistyaningsih",fakultas:"Hukum",angkatan:2004,pekerjaan:"Staff",domisili:"Kota Serang"},
{no:48,name:"Shinta Dewi Kartika",fakultas:"Ekonomi ",angkatan:2009,pekerjaan:"Dosen",domisili:"Kota Cilegon"},
{no:49,name:"Dwi Mulyantoro",fakultas:"Hukum",angkatan:1986,pekerjaan:"Notaris PPAT ",domisili:"Kota Tangerang"},
{no:50,name:"Asep Fauzan Al Fikri",fakultas:"Ekonomi",angkatan:1985,pekerjaan:"Ibu Rumah Tangga",domisili:"Tangerang Selatan"},
{no:51,name:"Agung Usman Ismail",fakultas:"Hukum",angkatan:1967,pekerjaan:"Pensiunan",domisili:"Kota Serang"},
{no:52,name:"Arifuddin Muchtar",fakultas:"Hukum",angkatan:1999,pekerjaan:"Notaris PPAT",domisili:"Tangerang Selatan"},
{no:53,name:"Heriyadi Rahmad, SH",fakultas:"Teknik Elektro",angkatan:2002,pekerjaan:"Karyawan BUMN",domisili:"Kota Cilegon"},
{no:54,name:"Aryo Priyambodo",fakultas:"Hukum",angkatan:2009,pekerjaan:"Karyawan Swasta",domisili:"Kota Cilegon"},
{no:55,name:"Lintang Purba Jaya",fakultas:"Teknik Sipil dan Perencanaan",angkatan:2014,pekerjaan:"Pegawai Swasta",domisili:"Kab Serang"},
{no:56,name:"Ita Yulistiawati",fakultas:"Hukum",angkatan:1991,pekerjaan:"Notaris PPAT",domisili:"Kota Tangerang"},
{no:57,name:"Subiyakto",fakultas:"Hukum",angkatan:1998,pekerjaan:"PNS",domisili:""},
{no:58,name:"Faizal Irawan, SH.",fakultas:"MIPA",angkatan:2005,pekerjaan:"Dosen",domisili:"Kota Cilegon"},
{no:59,name:"Siffa Widiastama",fakultas:"Hukum",angkatan:1991,pekerjaan:"",domisili:"Tangerang Selatan"},
{no:60,name:"Yulian Ikhram",fakultas:"Teknik Sipil dan Perencanaan",angkatan:2008,pekerjaan:"Karyawan swasta",domisili:"Kab Tangerang"},
{no:61,name:"Eka Agung Sulistyaningsih",fakultas:"Hukum",angkatan:1994,pekerjaan:"Notaris PPAT",domisili:"Kab Pandeglang"},
{no:62,name:"Shinta Dewi Kartika",fakultas:"Hukum",angkatan:1980,pekerjaan:"PNS/Dosen FH.Untirta",domisili:"Kota Serang"},
{no:63,name:"Dwi Mulyantoro",fakultas:"Hukum ",angkatan:1991,pekerjaan:"Notaris PPAT",domisili:"Kota Tangerang"},
{no:64,name:"Asep Fauzan Al Fikri",fakultas:"Teknik Sipil dan Perencanaan",angkatan:2013,pekerjaan:"Karyawan swasta",domisili:"Kota Cilegon"},
{no:65,name:"Agung Usman Ismail",fakultas:"Hukum ",angkatan:2001,pekerjaan:"Notaris PPAT",domisili:"Kota Tangerang"},
{no:66,name:"Arifuddin Muchtar",fakultas:"Ilmu Agama Islam ",angkatan:1998,pekerjaan:"Guru SMAN 2 Pandeglang",domisili:"Kab Pandeglang"},
{no:67,name:"Heriyadi Rahmad, SH",fakultas:"Hukum",angkatan:2003,pekerjaan:"Karyawan BUMN",domisili:"Kab Tangerang"},
{no:68,name:"Aryo Priyambodo",fakultas:"Hukum ",angkatan:1993,pekerjaan:"Pengajar di Fak. Syariah IAIB Serang",domisili:"Kota Serang"},
{no:69,name:"Lintang Purba Jaya",fakultas:"MIPA",angkatan:2011,pekerjaan:"Dosen",domisili:"Tangerang Selatan"},
{no:70,name:"Ita Yulistiawati",fakultas:"Teknik Industri",angkatan:1996,pekerjaan:"Tukang kusen pintu & jendela UPVC",domisili:"Kota Cilegon"},
{no:71,name:"Subiyakto",fakultas:"Hukum ",angkatan:1986,pekerjaan:"Notaris PPAT",domisili:"Kab Tangerang"},
{no:72,name:"Faizal Irawan, SH.",fakultas:"Ekonomi",angkatan:1986,pekerjaan:"Dosen",domisili:"Kota Tangerang"},
{no:73,name:"Siffa Widiastama",fakultas:"Ekonomi",angkatan:1984,pekerjaan:"Karyawan Swasta",domisili:"Kota Tangerang"},
{no:74,name:"Yulian Ikhram",fakultas:"MIPA ",angkatan:2002,pekerjaan:"Kepala Instalasi Farmasi",domisili:"Kota Cilegon"},
{no:75,name:"Eka Agung Sulistyaningsih",fakultas:"Ekonomi",angkatan:2006,pekerjaan:"Konsultan Politik",domisili:"Tangerang Selatan"},
{no:76,name:"Shinta Dewi Kartika",fakultas:"MIPA",angkatan:null,pekerjaan:"External Relationsip Management (asisten CEO)",domisili:"Kab Tangerang"},
{no:77,name:"Dwi Mulyantoro",fakultas:"Hukum",angkatan:1995,pekerjaan:"PNS ",domisili:"Tangerang Selatan"},
{no:78,name:"Asep Fauzan Al Fikri",fakultas:"Teknik Sipil dan Perencanaan",angkatan:1991,pekerjaan:"PNS",domisili:"Kota Cilegon"},
{no:79,name:"Agung Usman Ismail",fakultas:"Ekonomi ",angkatan:1985,pekerjaan:"Konsultan / Project Economist",domisili:"Tangerang Selatan"},
{no:80,name:"Arifuddin Muchtar",fakultas:"Teknik Sipil dan Perencanaan",angkatan:1989,pekerjaan:"Konsultan Teknik ",domisili:"Kota Tangerang"},
{no:81,name:"Heriyadi Rahmad, SH",fakultas:"Hukum",angkatan:2004,pekerjaan:"PNS",domisili:"Kota Cilegon"},
{no:82,name:"Aryo Priyambodo",fakultas:"Ekonomi ",angkatan:1986,pekerjaan:"Karyawan bank",domisili:"Tangerang Selatan"},
{no:83,name:"Lintang Purba Jaya",fakultas:"Ekonomi ",angkatan:1986,pekerjaan:"Dosen",domisili:"Kota Tangerang"},
{no:84,name:"Ita Yulistiawati",fakultas:"Teknik Sipil dan Perencanaan",angkatan:1987,pekerjaan:"Pendamping Desa Tingkat Provinsi",domisili:"Kota Serang"},
{no:85,name:"Subiyakto",fakultas:"Ekonomi ",angkatan:1987,pekerjaan:"Wirausaha",domisili:"Tangerang Selatan"},
{no:86,name:"Faizal Irawan, SH.",fakultas:"Hukum ",angkatan:1998,pekerjaan:"PNS",domisili:"Kab Pandeglang"},
{no:87,name:"Siffa Widiastama",fakultas:"MIPA",angkatan:2005,pekerjaan:"Dosen",domisili:"Kota Cilegon"},
{no:88,name:"Yulian Ikhram",fakultas:"Ekonomi ",angkatan:1980,pekerjaan:"Dosen",domisili:"Kab Tangerang"},
{no:89,name:"Eka Agung Sulistyaningsih",fakultas:"Hukum ",angkatan:2003,pekerjaan:"PNS",domisili:"Kota Tangerang"},
{no:90,name:"Shinta Dewi Kartika",fakultas:"Ekonomi",angkatan:2003,pekerjaan:"Karyawan",domisili:"Kab Serang"},
{no:91,name:"Dwi Mulyantoro",fakultas:"Hukum ",angkatan:2003,pekerjaan:"Notaris PPAT",domisili:"Tangerang Selatan"},
{no:92,name:"Asep Fauzan Al Fikri",fakultas:"Ekonomi",angkatan:1985,pekerjaan:"Dosen",domisili:"Kota Tangerang"},
{no:93,name:"Agung Usman Ismail",fakultas:"MIPA Farmasi ",angkatan:2001,pekerjaan:"Apoteker",domisili:"Kota Serang"},
{no:94,name:"Arifuddin Muchtar",fakultas:"Kedokteran",angkatan:2001,pekerjaan:"Dokter",domisili:"Kota Serang"},
{no:95,name:"Heriyadi Rahmad, SH",fakultas:"Hukum",angkatan:2007,pekerjaan:"Dosen",domisili:"Kab Tangerang"},
{no:96,name:"Aryo Priyambodo",fakultas:"MIPA",angkatan:null,pekerjaan:"SWASTA",domisili:"Kab Tangerang"},
{no:97,name:"Lintang Purba Jaya",fakultas:"Hukum ",angkatan:1995,pekerjaan:"PNS",domisili:"Tangerang Selatan"},
{no:98,name:"Ita Yulistiawati",fakultas:"Hukum",angkatan:1980,pekerjaan:"Notaris PPAT ",domisili:"Kota Cilegon"},
{no:99,name:"Subiyakto",fakultas:"Ilmu Agama Islam ",angkatan:1995,pekerjaan:"Tour Pleaner",domisili:"Tangerang Selatan"},
{no:100,name:"Faizal Irawan, SH.",fakultas:"Ilmu Agama Islam ",angkatan:1998,pekerjaan:"Wiraswasta",domisili:"Kab Pandeglang"},
{no:101,name:"Siffa Widiastama",fakultas:"Ekonomi",angkatan:1981,pekerjaan:"PNS",domisili:"Kota Serang"},
{no:102,name:"Yulian Ikhram",fakultas:"Ekonomi",angkatan:1981,pekerjaan:"DOSEN",domisili:"Kota Cilegon"},
{no:103,name:"Eka Agung Sulistyaningsih",fakultas:"Teknik Sipil dan Perencanaan",angkatan:null,pekerjaan:"Konsultan kontruksi",domisili:"Kota Cilegon"},
{no:104,name:"Shinta Dewi Kartika",fakultas:"Hukum",angkatan:2001,pekerjaan:"ASN",domisili:"Kota Serang"},
{no:105,name:"Dwi Mulyantoro",fakultas:"MIPA ",angkatan:2002,pekerjaan:"Apoteker",domisili:"Kota Cilegon"},
{no:106,name:"Asep Fauzan Al Fikri",fakultas:"Hukum ",angkatan:2000,pekerjaan:"Notaris PPAT",domisili:"Tangerang Selatan"},
{no:107,name:"Agung Usman Ismail",fakultas:"Hukum",angkatan:1991,pekerjaan:"Direktur PT Askrindo",domisili:""},
{no:108,name:"Arifuddin Muchtar",fakultas:"Hukum",angkatan:2006,pekerjaan:"Notaris PPAT ",domisili:"Kota Serang"},
{no:109,name:"Heriyadi Rahmad, SH",fakultas:"Hukum ",angkatan:2006,pekerjaan:"Notaris PPAT",domisili:"Kota Serang"},
{no:110,name:"Aryo Priyambodo",fakultas:"Ilmu Agama Islam ",angkatan:1998,pekerjaan:"Wiraswasta",domisili:"Kab Serang"},
{no:111,name:"Lintang Purba Jaya",fakultas:"Teknik Sipil dan Perencanaan",angkatan:2015,pekerjaan:"Pegawai Swasta",domisili:"Kab Serang"},
{no:112,name:"Ita Yulistiawati",fakultas:"Teknik Sipil dan Perencanaan",angkatan:2014,pekerjaan:"Asisten Konsultan",domisili:"Kab Serang"},
{no:113,name:"Subiyakto",fakultas:"Teknik Sipil dan Perencanaan",angkatan:2014,pekerjaan:"Karyawan swasta",domisili:"Kota Serang"},
{no:114,name:"Faizal Irawan, SH.",fakultas:"Teknik Sipil dan Perencanaan",angkatan:2014,pekerjaan:"Pegawai Swasta",domisili:"Kota Serang"},
{no:115,name:"Siffa Widiastama",fakultas:"Teknik Industri ",angkatan:2002,pekerjaan:"",domisili:"Kota Serang"},
{no:116,name:"Yulian Ikhram",fakultas:"Teknik Industri ",angkatan:null,pekerjaan:"Pegawai Swasta ",domisili:"Kab Pandeglang"},
{no:117,name:"Eka Agung Sulistyaningsih",fakultas:"MIPA",angkatan:2003,pekerjaan:"PNS",domisili:"Kota Serang"},
{no:118,name:"Shinta Dewi Kartika",fakultas:"Ilmu Agama Islam ",angkatan:1999,pekerjaan:"PNS",domisili:"Kab Pandeglang"},
{no:119,name:"Dwi Mulyantoro",fakultas:"Ekonomi ",angkatan:1999,pekerjaan:"Wirausaha",domisili:"Kota Serang"},
{no:120,name:"Asep Fauzan Al Fikri",fakultas:"Hukum",angkatan:null,pekerjaan:"Notaris PPAT",domisili:"Kota Cilegon"},
{no:121,name:"Agung Usman Ismail",fakultas:"Ekonomi",angkatan:2004,pekerjaan:"Karyawan Swasta (Perbankan)",domisili:"Kota Cilegon"},
{no:122,name:"Arifuddin Muchtar",fakultas:"Ekonomi",angkatan:2004,pekerjaan:"Karyawan Swasta (Perbankan)",domisili:"Kota Cilegon"},
{no:123,name:"Heriyadi Rahmad, SH",fakultas:"Teknik Industri ",angkatan:1998,pekerjaan:"Engineer",domisili:"Kota Tangerang"},
{no:124,name:"Aryo Priyambodo",fakultas:"Ilmu Agama Islam ",angkatan:1995,pekerjaan:"Wiraswasta",domisili:"Tangerang Selatan"},
{no:125,name:"Lintang Purba Jaya",fakultas:"Teknik Industri ",angkatan:1985,pekerjaan:"Dosen Pascasarjana",domisili:"Kab Tangerang"},
{no:126,name:"Ita Yulistiawati",fakultas:"Ilmu Agama Islam ",angkatan:2000,pekerjaan:"Swasata",domisili:"Kab Pandeglang"},
{no:127,name:"Subiyakto",fakultas:"Teknik Industri",angkatan:2004,pekerjaan:"Wiraswasta",domisili:"Kota Serang"},
{no:128,name:"Faizal Irawan, SH.",fakultas:"Hukum ",angkatan:1992,pekerjaan:"PNS",domisili:""},
{no:129,name:"Siffa Widiastama",fakultas:"Teknik Industri",angkatan:2000,pekerjaan:"",domisili:""},
{no:130,name:"Yulian Ikhram",fakultas:"Ekonomi",angkatan:2001,pekerjaan:"Polri",domisili:"Kota Cilegon"},
{no:131,name:"Eka Agung Sulistyaningsih",fakultas:"Hukum ",angkatan:1983,pekerjaan:"Konsultan",domisili:"Tangerang Selatan"},
{no:132,name:"Shinta Dewi Kartika",fakultas:"Teknik Industri ",angkatan:2004,pekerjaan:"Sales Admin Support ",domisili:"Kota Serang"},
{no:133,name:"Dwi Mulyantoro",fakultas:"Teknik industri",angkatan:2004,pekerjaan:"Karyawan Swasta, dosen",domisili:"Kab Serang"},
{no:134,name:"Asep Fauzan Al Fikri",fakultas:"Teknik Industri ",angkatan:2001,pekerjaan:"Krakatau Argo Logistics",domisili:"Kota Cilegon"},
{no:135,name:"Agung Usman Ismail",fakultas:"Teknik Industri",angkatan:2003,pekerjaan:"Karyawan PT Krakatau Steel",domisili:"Kota Cilegon"},
{no:136,name:"Arifuddin Muchtar",fakultas:"Teknik Industri ",angkatan:1994,pekerjaan:"Wiraswasta",domisili:"Kota Cilegon"},
{no:137,name:"Heriyadi Rahmad, SH",fakultas:"Teknik Industri ",angkatan:2014,pekerjaan:"Karyawan Swasta",domisili:"Kota Cilegon"},
{no:138,name:"Aryo Priyambodo",fakultas:"Teknik Industri",angkatan:2008,pekerjaan:"",domisili:"Kota Serang"},
{no:139,name:"Lintang Purba Jaya",fakultas:"Teknik Industri",angkatan:1991,pekerjaan:"Swasta",domisili:"Kota Serang"},
{no:140,name:"Ita Yulistiawati",fakultas:"Hukum",angkatan:1993,pekerjaan:"",domisili:"Tangerang Selatan"},
{no:141,name:"Subiyakto",fakultas:"Hukum",angkatan:1993,pekerjaan:"Notaris PPAT",domisili:"Tangerang Selatan"},
{no:142,name:"Faizal Irawan, SH.",fakultas:"Hukum ",angkatan:1993,pekerjaan:"Ibu rumah tangga",domisili:"Tangerang Selatan"},
{no:143,name:"Siffa Widiastama",fakultas:"Psikologi",angkatan:1998,pekerjaan:"HR",domisili:"Kota Cilegon"},
{no:144,name:"Yulian Ikhram",fakultas:"Hukum",angkatan:2004,pekerjaan:"PNS",domisili:"Kota Cilegon"},
{no:145,name:"Eka Agung Sulistyaningsih",fakultas:"Ekonomi ",angkatan:2000,pekerjaan:"PNS",domisili:"Kota Serang"}]


@Component({
  selector: 'app-dpw',
  templateUrl: './dpw.component.html',
  styleUrls: ['./dpw.component.css']
})
export class DpwComponent implements OnInit {
  displayedColumns: string[] = ['no','name', 'fakultas', 'angkatan', 'pekerjaan', 'domisili'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
