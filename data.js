// Base dataset (can be overridden by localStorage in app.js)
// Source: http://www.chrurck.com/?act=info.page&pcode=sub1_3

export const CATEGORIES = [
  {
    "id": "nonlife",
    "label": "손해보험"
  },
  {
    "id": "life",
    "label": "생명보험"
  },
  {
    "id": "mutual",
    "label": "공제회사"
  }
];

function clearbitLogo(domain) {
  return domain ? `https://logo.clearbit.com/${domain}` : "";
}

export const BASE_COMPANIES = [
  {
    "id": "aig-nonlife",
    "categoryId": "nonlife",
    "name": "AIG손해보험",
    "logoUrl": "./assets/company-logos/aig-nonlife.png",
    "homepageUrl": "https://www.aig.co.kr/",
    "systemLinkUrl": "https://sso.aig.co.kr/gaLogin/gaLogin.jsp",
    "callCenter": "1544-2792",
    "inCallMonitoring": "1544-2792",
    "helpdesk": "02-2260-6855",
    "claimFax": "02-2011-4607",
    "termsUrl": "https://www.aig.co.kr/wo/dpwot001.html?menuId=MS702",
    "claimFormUrl": "https://www.aig.co.kr/wm/content.html?contentId=DPWMS406&menuId=MS406",
    "branchCode": "지사코드X\n본사 소속",
    "assignee": "수도권2지점",
    "generalAffairsText": "김태연 총무\naig907@nate.com\nT.02-2260-6738\nF.02-6296-5312",
    "noteText": "일반 전용 콜센터\n전화 1544-7883 \n팩스 : 02-2260-2422\n메일주소   kr_easy@aig.com\n전산 헬프데스크 T.02-2260-6855\n인콜 모니터링 T.1600-4600\n콜센터 T.1544-2792",
    "roles": {
      "branchManager": {
        "name": "민성오",
        "phone": "010-6271-0235"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "이영민",
          "phone": "010-8191-0258"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "db-nonlife",
    "categoryId": "nonlife",
    "name": "DB손해보험",
    "logoUrl": "./assets/company-logos/db-nonlife.png",
    "homepageUrl": "https://www.idbins.com/",
    "systemLinkUrl": "https://www.mdbins.com",
    "callCenter": "1588-0100",
    "inCallMonitoring": "1566-0757",
    "helpdesk": "02-2262-1241",
    "claimFax": "0505-181-4862",
    "termsUrl": "https://www.idbins.com/FWMAIV1534.do",
    "claimFormUrl": "https://www.idbins.com/pc/bizxpress/ct/dc/FWCUSV1301.shtm",
    "branchCode": "34014974",
    "assignee": "여의도사업단 반포지점",
    "generalAffairsText": "송나영 총무\nT.02-2262-1241\nF.0505-181-8843\ngori11@nate.com\n\n일반보험 \n채널지원사업부 GA3지점 : \n박소연\nT : 02-3011-5096 \nF : 0505-181-8611\n네이트 : sypark0818@nate.com \n(일반보험 계약확정,배서 모두 기업보험부에서 처리)",
    "noteText": "일반보험 처리부서 안내\n\n*설계 및 배서 : 이나니 매니저님\n팩스 > 0505-181-0961\n전화 > 010-7377-9747\n(전화X, 문자나 카톡만O)\nE-mail. dlsksl81@nate.com\n\n*확정만 :  박소연\nT : 02-3011-5096 \nF : 0505-181-8611\n네이트 : sypark0818@nate.com\n\n전산 헬프데스크 - 02-2262-1241\n인콜 모니터링 T.1566-0757\n콜센터 T.1588-0100",
    "roles": {
      "branchManager": {
        "name": "우국영",
        "phone": "010-9474-7545"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "김은희",
          "phone": "010-2380-4508"
        },
        {
          "name": "허혜영",
          "phone": "0505-181-2037"
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "kb-nonlife",
    "categoryId": "nonlife",
    "name": "KB손해보험",
    "logoUrl": "./assets/company-logos/kb-nonlife.png",
    "homepageUrl": "https://www.kbinsure.co.kr/",
    "systemLinkUrl": "http://sales.kbinsure.co.kr",
    "callCenter": "1544-0114",
    "inCallMonitoring": "1544-0019",
    "helpdesk": "1544-8119",
    "claimFax": "0505-136-6500",
    "termsUrl": "https://www.kbinsure.co.kr/CG802030001.ec",
    "claimFormUrl": "https://www.kbinsure.co.kr/CG205020001.ec",
    "branchCode": "2914624",
    "assignee": "수도GA3-3지점",
    "generalAffairsText": "엄지 총무\nujj0002@nate.com\nT.02-6910-5933\n김주희 총무\nkb26kb@nate.com\n김종엽 총무(스캔담당)\nksp4747@nate.com\nF.0505-136-3886 >자동차 외 장기,기타서류\n자동차 F.0505-136-4317\n(일반,자동차는 팩스만, 원본발송X)",
    "noteText": "★KB손해보험 일반설계지원★\n\n일반청약매니저 : 김희순팀장님\n전화번호:02-6910-5906 (10시~4시 통화가능)\n팩스번호:0505-138-0655  \n메일주소:april333@kbinsure.co.kr\n\n전산 헬프데스크 - 1544-8119\n인콜 모니터링 T.1544-0019\n콜센터 T.1544-0114",
    "roles": {
      "branchManager": {
        "name": "성정윤",
        "phone": "010-9388-7116"
      },
      "viceBranchManager": {
        "name": "황일원",
        "phone": "010-7118-4369"
      },
      "managers": [
        {
          "name": "홍정선",
          "phone": "010-9215-7501"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "mg-nonlife",
    "categoryId": "nonlife",
    "name": "MG손해보험",
    "logoUrl": "./assets/company-logos/mg-nonlife.png",
    "homepageUrl": "https://www.mggeneralins.com/",
    "systemLinkUrl": "https://mganet.mggeneralins.com",
    "callCenter": "1588-5959",
    "inCallMonitoring": "1577-3777",
    "helpdesk": "02-3788-2261",
    "claimFax": "0505-088-1646",
    "termsUrl": "https://www.yebyeol.co.kr/PB031210DM.scp?menuId=MN0803006",
    "claimFormUrl": "https://www.yebyeol.co.kr/LG011010DM.scp",
    "branchCode": "",
    "assignee": "",
    "generalAffairsText": "임숙영 총무\nyb2025@nate.com\nT. 042-221-5441\n청약서 및 일반서류 팩스\n0505-088-0855\n동의서 팩스\n0505-088-0857",
    "noteText": "신계약 영업정지로 보험가입 불가\n(일반보험 문의처 확인 불가)\nGA채널 전용 IT헬프데스크 T.02)6922-5100\n콜센터(고객센터 대표번호) 1566-5800\n고객 사전동의 전용 팩스 F.02-6742-5696~8",
    "roles": {
      "branchManager": {
        "name": "이미옥 센터장",
        "phone": "010-9420-7192"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "nh-nonlife",
    "categoryId": "nonlife",
    "name": "NH농협손해보험",
    "logoUrl": "./assets/company-logos/nh-nonlife.png",
    "homepageUrl": "https://www.nhfire.co.kr/",
    "systemLinkUrl": "http://www.nhfire.co.kr/fc/fd.nhfire",
    "callCenter": "1644-9000",
    "inCallMonitoring": "1644-9600",
    "helpdesk": "1644-0090",
    "claimFax": "0505-060-7000",
    "termsUrl": "https://www.nhfire.co.kr/announce/productAnnounce/retrieveInsuranceProductsAnnounce.nhfire",
    "claimFormUrl": "https://www.nhfire.co.kr/customer/bilgdcm/retrieveBilgDcmList.nhfire",
    "branchCode": "I0210692",
    "assignee": "강남GA지점",
    "generalAffairsText": "이소의 총무\nT.02-2024-4111\nnhf4111@nate.com \n▶동의서 FAX : 0505 060 5000\n▶청약서 FAX: 0505 060 6022",
    "noteText": "전산 헬프데스크 T.1644-0096\n인콜 모니터링 T.1644-9600\n콜센터 T.1644-9000\n동의서 F.0505-060-5000\n업무지원센터(T.1522-3642)-일반보험 설계지원",
    "roles": {
      "branchManager": {
        "name": "안성빈",
        "phone": "010-9404-4272"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "이대윤",
          "phone": "010-2619-4520"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "lotte-nonlife",
    "categoryId": "nonlife",
    "name": "롯데손해보험",
    "logoUrl": "./assets/company-logos/lotte-nonlife.png",
    "homepageUrl": "https://www.lotteins.co.kr/",
    "systemLinkUrl": "http://lottero.lotteins.co.kr",
    "callCenter": "1588-3344",
    "inCallMonitoring": "1600-5182",
    "helpdesk": "1599-8260",
    "claimFax": "0507-333-9999",
    "termsUrl": "https://lotteins.co.kr/web/C/D/H/cdh190.jsp",
    "claimFormUrl": "https://lotteins.co.kr/web/C/D/C/cdc_claim_0502.jsp",
    "branchCode": "2S13881",
    "assignee": "강남GA1지점",
    "generalAffairsText": "최현아 총무\nT. 02-6308-7847\nF. 02-2094-5499\nlet7847@nate.com",
    "noteText": "일반보험 없음\n전산 헬프데스크 T.1599-8260\n인콜 모니터링 T.1600-5182\n콜센터 T.1588-3344",
    "roles": {
      "branchManager": {
        "name": "박주하",
        "phone": "010-3366-3785"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "홍정미",
          "phone": "010-4110-8140"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "meritz-nonlife",
    "categoryId": "nonlife",
    "name": "메리츠화재",
    "logoUrl": "./assets/company-logos/meritz-nonlife.png",
    "homepageUrl": "https://www.meritzfire.com/",
    "systemLinkUrl": "http://sales.meritzfire.com",
    "callCenter": "1566-7711",
    "inCallMonitoring": "1577-7711",
    "helpdesk": "02-3786-2777",
    "claimFax": "0505-021-3400",
    "termsUrl": "https://www.meritzfire.com/disclosure/product-announcement/product-list.do#!/",
    "claimFormUrl": "https://www.meritzfire.com/compensation/longterm-insurance/request-document.do#!/",
    "branchCode": "423000927",
    "assignee": "GA3본부  GA3-1지점",
    "generalAffairsText": "김초아 총무\nT.  02-3707-8572\n장기/자동차/일반 청약관련 \nF. 0505-021-5184\nca9924@nate.com",
    "noteText": "■일반보험 산출 의뢰 \n-메일주소 : ga114@meritz.co.kr \n(메일발송시 제목에 '계약자명' 기재)\n-팩스 : 0505-021-4700\n연락처: 02-6112-0728\n일반보험 설계문의: 02-6464-3123\n전산 헬프데스크 - 02-3786-2777\n모니터링 T.1577-7711\n콜센터 T.1566-7711\n설계동의 > 출력하시면 팩스 번호 나옵니다.",
    "roles": {
      "branchManager": {
        "name": "유태윤",
        "phone": "010-9283-1905"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "하미숙",
          "phone": "010-3321-5068"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "samsung-fire",
    "categoryId": "nonlife",
    "name": "삼성화재",
    "logoUrl": "./assets/company-logos/samsung-fire.png",
    "homepageUrl": "https://www.samsungfire.com/",
    "systemLinkUrl": "https://erp.samsungfire.com",
    "callCenter": "1588-5114",
    "inCallMonitoring": "1566-0553",
    "helpdesk": "1899-5005",
    "claimFax": "0505-162-0872",
    "termsUrl": "https://www.samsungfire.com/page/VH.REIF0011.do",
    "claimFormUrl": "https://www.samsungfire.com/claim/P_P03_01_02_009.html",
    "branchCode": "61146024",
    "assignee": "GA2사업단 GA2.1지점",
    "generalAffairsText": "민동환 총무\nT.02-3468-9738\nF.0505-161-6122\n(일반보험 F.0505-161-6122)\nmindung0612@nate.com\n삼성메일 dh612.min@samsung.com",
    "noteText": "일반보험 설계문의: T1566-8340/F.0505-161-9043\n또는 gailban1@samsung.com \n*고객등록 필수, 코드&연락처 기재 후 의뢰\n배서지원센터 070-7111-8600\n전산 헬프데스크 T.1899-5005\n모니터링 T.1566-0553\n콜센터 T.1588-5114",
    "roles": {
      "branchManager": {
        "name": "한뜻",
        "phone": "010-4902-2835"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "박경정",
          "phone": "010-9799-0595"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "hana-nonlife",
    "categoryId": "nonlife",
    "name": "하나손해보험",
    "logoUrl": "./assets/company-logos/hana-nonlife.png",
    "homepageUrl": "https://www.hanainsure.co.kr/",
    "systemLinkUrl": "https://sfa.saleshana.com",
    "callCenter": "1566-3000",
    "inCallMonitoring": "1566-3000 연결 후 2번",
    "helpdesk": "02-6670-8110",
    "claimFax": "0504-3764-0765",
    "termsUrl": "https://www.hanainsure.co.kr/w/disclosure/product/saleProduct",
    "claimFormUrl": "https://www.hanainsure.co.kr/w/claim/carReward/rewardDocumentGuide",
    "branchCode": "본사 소속",
    "assignee": "수도권2사업단 2-1지점",
    "generalAffairsText": "박조은 총무\nT.02-522-8639\n청약서 팩스 0504-3764-6752\n동의서 팩스 02-6355-2500\njojo2900@nate.com",
    "noteText": "일반보험 없음\n전산 헬프데스크 - 1660-4290\n인콜 모니터링 T.1660-4590\n콜센터 T.1566-3000",
    "roles": {
      "branchManager": {
        "name": "정보름",
        "phone": "010-5746-9979"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "최경희",
          "phone": "010-5656-1427"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "hanwha-nonlife",
    "categoryId": "nonlife",
    "name": "한화손해보험",
    "logoUrl": "./assets/company-logos/hanwha-nonlife.png",
    "homepageUrl": "https://www.hwgeneralins.com/",
    "systemLinkUrl": "http://portal.hwgeneralins.com",
    "callCenter": "1566-8000",
    "inCallMonitoring": "1670-1882",
    "helpdesk": "02-316-0111",
    "claimFax": "0502-779-1004",
    "termsUrl": "https://www.hwgeneralins.com/notice/ir/product-ing01.do",
    "claimFormUrl": "https://www.hwgeneralins.com/fplaza/compensation/receipt01.do",
    "branchCode": "3509832",
    "assignee": "성동GA지점",
    "generalAffairsText": "김지원 총무\nF.0502-604-5521\nkid25800@naver.com",
    "noteText": "한화장기재물/자동차요율/일반보험 설계문의 \nT.1566-9882 / F.0502-777-6562\n전산 헬프데스크 - 02-316-0111\n인콜 모니터링 T.1670-1882\n콜센터 T.1566-8000",
    "roles": {
      "branchManager": {
        "name": "김장현",
        "phone": "010-6338-0573"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "장정민",
          "phone": "010-8284-0965"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "hyundai-nonlife",
    "categoryId": "nonlife",
    "name": "현대해상",
    "logoUrl": "./assets/company-logos/hyundai-nonlife.png",
    "homepageUrl": "https://www.hi.co.kr/",
    "systemLinkUrl": "https://sp.hi.co.kr",
    "callCenter": "1588-5656",
    "inCallMonitoring": "1577-3223",
    "helpdesk": "02-2628-4567",
    "claimFax": "0507-774-6060",
    "termsUrl": "https://www.hi.co.kr/serviceAction.do?view=bin/PA/03/HHPA03010M#none",
    "claimFormUrl": "https://www.hi.co.kr/serviceAction.do?menuId=100631",
    "branchCode": "9A3981",
    "assignee": "서초AM사업부 대치AM지점",
    "generalAffairsText": "신다혜 총무\nsy310386@nate.com\nT.02-2009-8842\n권민경 총무\nmin51100@nate.com \nT.02-2009-8843\n김기민 총무\ngm313715@nate.com\nT. 02-2009-8844\nF.0507-774-6540\n자동차 윤소현 총무\nT.02-2009-8934\nF.0507-774-2233\nhisohyun410@nate.com",
    "noteText": "일반보험 설계매니저 김미영 매니저\nT.02-6744-1644/F.0507-772-3136\n(업무시간 10시~17시/통화 가능시간 10시~16시)\n\n전산 헬프데스크 T.02-2628-4567\n인콜 모니터링 T.1577-3223\n콜센터 T.1588-5656",
    "roles": {
      "branchManager": {
        "name": "김정란",
        "phone": "010-6633-0101"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "송윤정",
          "phone": "010-8594-5633"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "heungkuk-fire",
    "categoryId": "nonlife",
    "name": "흥국화재",
    "logoUrl": "./assets/company-logos/heungkuk-fire.png",
    "homepageUrl": "https://www.heungkukfire.co.kr/",
    "systemLinkUrl": "http://upride.heungkukfire.co.kr",
    "callCenter": "1688-1688",
    "inCallMonitoring": "1688-6997",
    "helpdesk": "031-786-8088",
    "claimFax": "0504-800-0700",
    "termsUrl": "https://www.heungkukfire.co.kr/FRW/announce/insGoodsGongsiSale.do",
    "claimFormUrl": "https://www.heungkukfire.co.kr/FRW/compensation/accidentDocInfo.do",
    "branchCode": "61230748",
    "assignee": "GA사업부 서대문GA",
    "generalAffairsText": "변아영 총무 \n02-726-1981  \nayb0311@nate.com\n지점팩스 \n0508-130-5114",
    "noteText": "일반보험 설계매니저\n\n ■ 담당자 : 이혜정 설계매니저\n ■ 연락처 : 070-8970-6258\n ■ e-mail : 51210093@insurance.co.kr\n ■ fax : 0504-800-0093\n\n ■ 업무시간 : 오전10시~오후4시30분\n ■ 설계지원 불가 상품\n   -> 장기재물, 아파트종합, 단체안심상해, 해외여행자보험,일반화재,배상책임보험.\n\n전산 헬프데스크 T.031-786-8088\n인콜 모니터링 T.1688-6997\n콜센터 T.1688-1688",
    "roles": {
      "branchManager": {
        "name": "최지현",
        "phone": "010-9299-3149"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "이인혜",
          "phone": "010-7907-5165"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "chubb-nonlife",
    "categoryId": "nonlife",
    "name": "라이나손해보험",
    "logoUrl": "./assets/company-logos/chubb-nonlife.png",
    "homepageUrl": "https://www.chubb.com/kr-kr/",
    "systemLinkUrl": "https://www.chubb.com/kr-kr/",
    "callCenter": "1566-5800",
    "inCallMonitoring": "02-2127-2308 (치아: 02-6913-8482)",
    "helpdesk": "",
    "claimFax": "",
    "termsUrl": "https://www.chubb.com/kr-kr/disclosure/product.html",
    "claimFormUrl": "https://www.chubb.com/kr-kr/claims/report-a-claim.html",
    "branchCode": "T11327",
    "assignee": "강남1지점",
    "generalAffairsText": "김현경 총무\nchubb14@nate.com\n청약서 팩스 x\nPDF파일 업로드 \n원본발송\n고객 사전동의 전용 팩스 F.02-6742-5696~8",
    "noteText": "일반보험 담당자 : 이용진 차장 02-6711-5820\nGA채널 전용 IT헬프데스크 T.02)6922-5100\n콜센터(고객센터 대표번호) 1566-5800\n고객 사전동의 전용 팩스 F.02-6742-5696~8",
    "roles": {
      "branchManager": {
        "name": "장경훈",
        "phone": "010-8473-0058"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "홍준혁",
          "phone": "010-4812-0830"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "axa-nonlife",
    "categoryId": "nonlife",
    "name": "AXA 손해보험",
    "logoUrl": "./assets/company-logos/axa-nonlife.png",
    "homepageUrl": "https://www.axa.co.kr/",
    "systemLinkUrl": "https://www.axa.co.kr/ActionControler.action?screenID=SHCM0000&actionID=I01",
    "callCenter": "1566-1566",
    "inCallMonitoring": "콜센터 가상번호 부여",
    "helpdesk": "",
    "claimFax": "",
    "termsUrl": "https://www.axa.co.kr/AsianPlatformInternet/html/axacms/common/intro/disclosure/insurance/index.html",
    "claimFormUrl": "https://www.axa.co.kr/AsianPlatformInternet/html/axacms/shcl/pa/process/index.html",
    "branchCode": "",
    "assignee": "",
    "generalAffairsText": "",
    "noteText": "",
    "roles": {
      "branchManager": {
        "name": "",
        "phone": ""
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "aia-life",
    "categoryId": "life",
    "name": "AIA생명",
    "logoUrl": "./assets/company-logos/aia-life.png",
    "homepageUrl": "https://www.aia.co.kr/",
    "systemLinkUrl": "https://imap.aia.co.kr",
    "callCenter": "1588-9898",
    "inCallMonitoring": "1588-2513",
    "helpdesk": "1588-2937",
    "claimFax": "02-2021-4540",
    "termsUrl": "https://www.aia.co.kr/ko/our-products.html",
    "claimFormUrl": "https://www.aia.co.kr/ko/help-support/forms.html",
    "branchCode": "",
    "assignee": "",
    "generalAffairsText": "",
    "noteText": "",
    "roles": {
      "branchManager": {
        "name": "",
        "phone": ""
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "abl-life",
    "categoryId": "life",
    "name": "ABL생명",
    "logoUrl": "./assets/company-logos/abl-life.png",
    "homepageUrl": "https://www.abllife.co.kr/",
    "systemLinkUrl": "http://ga.abllife.co.kr",
    "callCenter": "1588-6500",
    "inCallMonitoring": "1566-1002",
    "helpdesk": "02-3787-8583",
    "claimFax": "콜센터 가상번호 부여",
    "termsUrl": "https://www.abllife.co.kr/st/pban/prdtPban/whlPrdt/whlPrdt1/whlPrdt11?page=index",
    "claimFormUrl": "https://www.abllife.co.kr/st/custDesk/insSrvcGudn/acdtInsmClamGudn/acdtInsmClamGudn3?page=index",
    "branchCode": "108596",
    "assignee": "서울GA사업단",
    "generalAffairsText": "최승희 총무\nT.02-3787-8813\nF.02-3787-8727\n네이트 없음",
    "noteText": "전산 헬프데스크 T.02-3787-8583\n태블릿 헬프데스크 T.02-3787-8324\n인콜 모니터링 T.1566-1002\n콜센터 T.1588-6500\n고객센터(보험금 문의/접수)T.1588-4404\n고객센터(가입상품 보장문의 / 변경) T.1588-6500",
    "roles": {
      "branchManager": {
        "name": "김남욱",
        "phone": "010-3135-1912"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "김미숙",
          "phone": "010-8114-6232"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "cardif-life",
    "categoryId": "life",
    "name": "BNP파리바카디프",
    "logoUrl": "./assets/company-logos/cardif-life.png",
    "homepageUrl": "https://www.cardif.co.kr/",
    "systemLinkUrl": "http://ga.cardif.co.kr",
    "callCenter": "1688-1118",
    "inCallMonitoring": "1688-1118",
    "helpdesk": "1577-3435",
    "claimFax": "콜센터 가상번호 부여",
    "termsUrl": "https://www.cardif.co.kr/disclosure/papag101.do",
    "claimFormUrl": "https://www.cardif.co.kr/customer-center/hcwgi001.do",
    "branchCode": "01860",
    "assignee": "인카금융서비스 전략부문",
    "generalAffairsText": "업무지원 \ngacardif@nate.com\n  전화 1577-3435\n업무팩스 : 02-3782-1002",
    "noteText": "[설계 요청서]\n※모집자정보\n성함: \n코드: \n휴대폰번호: \n\n※설계 요청내용\n1. 상품명\n2. 납기/만기\n3. 보험료(가입금액 or 월보험료)\n4. 고객정보\n성함: \n주민번호: \n직업(하는일): \n휴대폰번호/이메일주소: \n주소: (시/도부터_서울시,경기도 등) \n운전유무:",
    "roles": {
      "branchManager": {
        "name": "이주호",
        "phone": "010-4003-6272"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "임나래",
          "phone": "010-2282-5377"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "db-life",
    "categoryId": "life",
    "name": "DB생명",
    "logoUrl": "./assets/company-logos/db-life.png",
    "homepageUrl": "https://www.idblife.com/",
    "systemLinkUrl": "http://etopia.dongbulife.com",
    "callCenter": "1588-3131",
    "inCallMonitoring": "02-6470-7663",
    "helpdesk": "02-2119-5151",
    "claimFax": "0505-129-3134",
    "termsUrl": "https://www.idblife.com/notice/product/sale",
    "claimFormUrl": "https://www.idblife.com/support/guide/acbf_clm",
    "branchCode": "01860",
    "assignee": "성수지점",
    "generalAffairsText": "김혜란 총무\nT.02-779-5382\nF.0505-129-4722\n(고객동의서전용 팩스:\n0505-129-4754)\ndb01965@nate.com",
    "noteText": "전산 헬프데스크 T.02-2119-5151\n인콜 모니터링 T.02-6470-7663\n콜센터 T.1588-3131",
    "roles": {
      "branchManager": {
        "name": "진창경",
        "phone": "010-6524-9828"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "dgb-life",
    "categoryId": "life",
    "name": "DGB생명",
    "logoUrl": "./assets/company-logos/dgb-life.png",
    "homepageUrl": "https://www.dgbfnlife.com/",
    "systemLinkUrl": "https://fgs.dgbfnlife.com:8443",
    "callCenter": "1588-4770",
    "inCallMonitoring": "1588-4770",
    "helpdesk": "02-2087-9594",
    "claimFax": "콜센터 접수 후 0505-083-5420",
    "termsUrl": "https://www.dgbfnlife.com/BA/BA_A020.do",
    "claimFormUrl": "https://www.dgbfnlife.com/BB/BB_D010.do",
    "branchCode": "BB010139",
    "assignee": "강북 GA영업단",
    "generalAffairsText": "최후분 총무\niM라이프 신계약 관련 메신저\neksel02@nate.com\n(오퍼레이션 강북)\n신계약 T.02-2087-9379\n기타업무 T.02-2087-9430\nF.0505-083-5125\n대표팩스번호 0505-083-8800",
    "noteText": "전산 헬프데스크 T.02-2087-9594~96\n인콜 모니터링 T.1588-4770\n콜센터 T.1588-4770",
    "roles": {
      "branchManager": {
        "name": "성복임",
        "phone": "010-8000-9470"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "ibk-pension",
    "categoryId": "life",
    "name": "IBK연금보험",
    "logoUrl": "./assets/company-logos/ibk-pension.png",
    "homepageUrl": "https://www.ibki.co.kr/",
    "systemLinkUrl": "https://vpn.ibkinsu.co.kr",
    "callCenter": "1577-4117",
    "inCallMonitoring": "02-2270-1661",
    "helpdesk": "02-2270-1577",
    "claimFax": "",
    "termsUrl": "https://www.ibki.co.kr/process/HP_PBANO_PDT_SP_INDV",
    "claimFormUrl": "https://www.ibki.co.kr/process/HP_CSCETR_POSN_DOC_INS_LIST?bltb_cod=SC000014&sctn=in&TAB=in",
    "branchCode": "",
    "assignee": "",
    "generalAffairsText": "총무없음",
    "noteText": "전산 헬프데스크 T.02-2270-1666 \n청약서 스캔X, 전산에서 바로 수납잡고 원본발송\n인콜 모니터링 T.\n콜센터 T.",
    "roles": {
      "branchManager": {
        "name": "안호준",
        "phone": "010-2175-2884"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "kb-life",
    "categoryId": "life",
    "name": "KB라이프생명",
    "logoUrl": "./assets/company-logos/kb-life.png",
    "homepageUrl": "https://www.kblife.co.kr/",
    "systemLinkUrl": "http://esfa.kbli.co.kr",
    "callCenter": "1588-3374",
    "inCallMonitoring": "1566-2730",
    "helpdesk": "(구)푸르덴셜생명: 라이프파트너 / (구)KB생명: 02-6220-9912",
    "claimFax": "",
    "termsUrl": "https://www.kblife.co.kr/?/=true&tab=currently-selling",
    "claimFormUrl": "https://www.kblife.co.kr/customer-center/informRequiredDocument.do",
    "branchCode": "754HS",
    "assignee": "GA영업지원부",
    "generalAffairsText": "신혜리 총무\nT.1899-3800(업무헬프데스크)\nT. 02-2144-2739\nF.02-390-4804\nkblga3@nate.com",
    "noteText": "전산 헬프데스크 T.1899-3899\n인콜 모니터링 T.1566-2730\n콜센터 T.1588-3374\n업무요청서(증권재발행)\nF.02-390-4703 > 사무실로만 발송가능\n업무요청서(반송요청서)\nF.02-390-4804",
    "roles": {
      "branchManager": {
        "name": "왕해인",
        "phone": "010-4820-1470"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "윤보림",
          "phone": "010-4261-9596"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "kdb-life",
    "categoryId": "life",
    "name": "KDB생명",
    "logoUrl": "./assets/company-logos/kdb-life.png",
    "homepageUrl": "https://www.kdblife.co.kr/",
    "systemLinkUrl": "http://kss.kdblife.co.kr",
    "callCenter": "1588-4040",
    "inCallMonitoring": "1588-4040",
    "helpdesk": "02-6303-2771",
    "claimFax": "콜센터 접수 후 02-2669-6500",
    "termsUrl": "https://www.kdblife.co.kr/ajax.do?scrId=HDLMA002M02P",
    "claimFormUrl": "https://www.kdblife.co.kr/ajax.do?scrId=HCSCT006M01P",
    "branchCode": "967235",
    "assignee": "제일사업단",
    "generalAffairsText": "김유정 총무\nT.02-3467-7795\nF.가입설계서/적합성 팩스 : \n02 2669 7999\nkdb7727@nate.com",
    "noteText": "전산 헬프데스크 T.02-6303-2771\n인콜 모니터링 T.1588-4040\n콜센터 T.1588-4040",
    "roles": {
      "branchManager": {
        "name": "김광자",
        "phone": "010-7450-6725"
      },
      "viceBranchManager": {
        "name": "권은하",
        "phone": "010-9685-6725"
      },
      "managers": [
        {
          "name": "이민희",
          "phone": "010-5198-6325"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "nh-life",
    "categoryId": "life",
    "name": "NH농협생명",
    "logoUrl": "./assets/company-logos/nh-life.png",
    "homepageUrl": "https://www.nhlife.co.kr/",
    "systemLinkUrl": "http://www.nhlife.co.kr/nhsmart.nhl",
    "callCenter": "1544-4000",
    "inCallMonitoring": "1544-4422",
    "helpdesk": "02-3786-8800",
    "claimFax": "02-6971-6040",
    "termsUrl": "https://www.nhlife.co.kr/ho/on/HOON0004M00.nhl",
    "claimFormUrl": "https://www.nhlife.co.kr/ho/cc/HOCC0010M00.nhl",
    "branchCode": "C10129",
    "assignee": "강남AM지역사업국",
    "generalAffairsText": "권다혜 주임 (총무)\nT.02-2051-9521\n F.02-6971-6513\n네이트없음, 전화업무",
    "noteText": "전산 헬프데스크 T.1644-9940\n인콜 모니터링 T.1544-4422\n콜센터 T.1544-4000",
    "roles": {
      "branchManager": {
        "name": "방성환",
        "phone": "010-3971-0223"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "황태영",
          "phone": "010-4790-7666"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "kyobo-life",
    "categoryId": "life",
    "name": "교보생명",
    "logoUrl": "./assets/company-logos/kyobo-life.png",
    "homepageUrl": "https://www.kyobo.com/",
    "systemLinkUrl": "https://ga.kyobo.com",
    "callCenter": "1588-1001",
    "inCallMonitoring": "1588-1636",
    "helpdesk": "02-721-3130",
    "claimFax": "콜센터 가상번호 부여",
    "termsUrl": "https://www.kyobo.com/dgt/web/product-official/all-product/search",
    "claimFormUrl": "https://www.kyobo.com/dgt/web/customer/support/need-papers/list",
    "branchCode": "55471100",
    "assignee": "남서울 AM",
    "generalAffairsText": "이선영 총무\nT. 02-563-6731\nF.02-563-6701 일반팩스\nF.0502-303-5421 동의서전용팩스\nsy202401@nate.com",
    "noteText": "전산 헬프테스크 T.02-721-3130\n인콜 모니터링 T.1588-1636\n콜센터 T.1588-1001",
    "roles": {
      "branchManager": {
        "name": "최정갑",
        "phone": "010-2261-7994"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "원재경",
          "phone": "010-8921-9884"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "tongyang-life",
    "categoryId": "life",
    "name": "동양생명",
    "logoUrl": "./assets/company-logos/tongyang-life.png",
    "homepageUrl": "https://www.myangel.co.kr/",
    "systemLinkUrl": "http://1004.myangel.co.kr",
    "callCenter": "1577-1004",
    "inCallMonitoring": "080-899-1004",
    "helpdesk": "02-728-9900",
    "claimFax": "02-3289-4517",
    "termsUrl": "https://www.myangel.co.kr/paging/WE_AC_WEPAAP020100L",
    "claimFormUrl": "https://www.myangel.co.kr/process/main",
    "branchCode": "42039",
    "assignee": "GA서울사업단",
    "generalAffairsText": "김영지 과장\nT.02-3670-5545\n동의서F 02-3289-4500  \n*고객별/증번별각각 발송요청\n청약서F 02-3289-4501  \n*(신계약보완서류)*증번별각각 발송요청\nrladudwl0505@nate.com",
    "noteText": "설계지원\n1.설계매니저님\n2.모바일 접수(카톡 채널추가)\n카톡 \"친구찾기\"돋보기 클릭하여\n\"동양생명GA엔젤라운지\" 검색 후 \"채널추가\"\n\n3.엔젤플래너 접수\n신규고객동의 화면에서,\n고객동의 및 등록 완료 후\n우측 하단의 \"[설계지원요청]\" 검정색 버튼 클릭\n===============================\n전산 헬프테스크 T.02-728-9900\n인콜 모니터링 T.080-899-1004\n콜센터 T.1577-1004",
    "roles": {
      "branchManager": {
        "name": "최선정",
        "phone": "010-4201-9781"
      },
      "viceBranchManager": {
        "name": "김현정",
        "phone": "010-9652-9658"
      },
      "managers": [
        {
          "name": "최서연",
          "phone": "010-3140-5713"
        },
        {
          "name": "김성훈",
          "phone": "010-7674-9867"
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "lina-life",
    "categoryId": "life",
    "name": "라이나생명",
    "logoUrl": "./assets/company-logos/lina-life.png",
    "homepageUrl": "https://www.lina.co.kr/",
    "systemLinkUrl": "https://ga.lina.co.kr",
    "callCenter": "1588-0058",
    "inCallMonitoring": "1588-2442",
    "helpdesk": "1588-2215",
    "claimFax": "02-6944-1200",
    "termsUrl": "https://www.lina.co.kr/disclosure/product_list.htm?productState=01&productKind=01",
    "claimFormUrl": "https://www.lina.co.kr/cyber/accident-insurance/document-zero",
    "branchCode": "714066",
    "assignee": "GA영업 강북본부",
    "generalAffairsText": "노윤희 총무\nT.02-3775-7109\nF.02-6944-1322\nlina7109@nate.com\n보완서류 F.080-850-0760\n(인카전용)",
    "noteText": "전산 헬스데스크 T.02-3781-2006\n인콜 모니터링 T.1588-2442\n콜센터 T.1588-0058",
    "roles": {
      "branchManager": {
        "name": "송현상",
        "phone": "010-7251-0299"
      },
      "viceBranchManager": {
        "name": "우정화",
        "phone": "010-2376-0616"
      },
      "managers": [
        {
          "name": "손은민",
          "phone": "010-2806-5365"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "metlife-life",
    "categoryId": "life",
    "name": "메트라이프",
    "logoUrl": "./assets/company-logos/metlife-life.png",
    "homepageUrl": "https://www.metlife.co.kr/",
    "systemLinkUrl": "http://metplus.metlife.co.kr",
    "callCenter": "1588-9600",
    "inCallMonitoring": "1588-9609",
    "helpdesk": "1899-0751",
    "claimFax": "02-3469-9428",
    "termsUrl": "https://brand.metlife.co.kr/pn/paReal/insuProductDisclMain.do",
    "claimFormUrl": "https://cyber.metlife.co.kr/claim/requiredDocumentNotice",
    "branchCode": "2000730379",
    "assignee": "내셔널사업단 내셔널2지점",
    "generalAffairsText": "신계약담당자\nT.1899-0751 -3번\n F.0502-370-0207\nmetlife-10@nate.com",
    "noteText": "완전판매모니터링 1588-9609 \n전산 헬프데스크 1899-0751 (0번)\n인콜 모니터링 T.1588-9600\n콜센터 T.1588-9600",
    "roles": {
      "branchManager": {
        "name": "박은일",
        "phone": "010-9695-2842"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "양문자",
          "phone": "010-6755-5808"
        },
        {
          "name": "박은영",
          "phone": "010-3046-2646"
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "miraeasset-life",
    "categoryId": "life",
    "name": "미래에셋",
    "logoUrl": "./assets/company-logos/miraeasset-life.png",
    "homepageUrl": "https://life.miraeasset.com/",
    "systemLinkUrl": "http://www.loveageplan.com",
    "callCenter": "1588-0220",
    "inCallMonitoring": "1588-0220",
    "helpdesk": "02-3271-5108",
    "claimFax": "콜센터 가상번호 부여",
    "termsUrl": "https://life.miraeasset.com/micro/disclosure/product/PC-HO-080301-000000.do",
    "claimFormUrl": "https://life.miraeasset.com/home/index.do#MO-HO-030501-010000",
    "branchCode": "9696",
    "assignee": "GA3본부1팀",
    "generalAffairsText": "이민진 총무\nT. 02-3271-4567\nF. 02-6210-7912\n mjsna3@nate.com",
    "noteText": "설계사 전산 헬스데스크 T.02-3271-4848\n총무 전산 헬스데스크 T.02-3271-5108  (1번)\n인콜 모니터링 T.1588-0220\n콜센터 T.1588-0220",
    "roles": {
      "branchManager": {
        "name": "김동환",
        "phone": "010-7135-6393"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "곽진영",
          "phone": "010-9286-4166"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "samsung-life",
    "categoryId": "life",
    "name": "삼성생명",
    "logoUrl": "./assets/company-logos/samsung-life.png",
    "homepageUrl": "https://www.samsunglife.com/",
    "systemLinkUrl": "http://u-channel-ga.samsunglife.com",
    "callCenter": "1588-3114",
    "inCallMonitoring": "1588-3115",
    "helpdesk": "02-311-4500",
    "claimFax": "콜센터 가상번호 부여",
    "termsUrl": "https://www.samsunglife.com/individual/products/disclosure/sales/PDO-PRPRI010110M",
    "claimFormUrl": "https://www.samsunglife.com/individual/mysamsunglife/insurance/internet/MDP-MYINT020110M",
    "branchCode": "00239742",
    "assignee": "삼성생명 GA역삼지점",
    "generalAffairsText": "정지은 총무 \nT. 02-539-6725 \nF. 02-3709-5654 \nga10276@nate.com",
    "noteText": "이미경CM(부지점장님) 010-3272-4324 \n전산 헬스데스크 T.02-311-4500\n인콜 모니터링 T.1588-3115\n콜센터 T.1588-3114",
    "roles": {
      "branchManager": {
        "name": "신종래",
        "phone": "010-3030-4575"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "이태희",
          "phone": "010-8115-8853"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "shinhan-life",
    "categoryId": "life",
    "name": "신한라이프",
    "logoUrl": "./assets/company-logos/shinhan-life.png",
    "homepageUrl": "https://www.shinhanlife.co.kr/",
    "systemLinkUrl": "https://ga.shinhanlife.co.kr",
    "callCenter": "1588-5580",
    "inCallMonitoring": "1522-2285",
    "helpdesk": "02-3455-4119",
    "claimFax": "콜센터 가상번호 부여",
    "termsUrl": "https://www.shinhanlife.co.kr/hp/cdhi0010.do",
    "claimFormUrl": "https://www.shinhanlife.co.kr/hp/cdhf0020t02.do",
    "branchCode": "0001860",
    "assignee": "GA1영업본부 밸류업지점",
    "generalAffairsText": "이상은 프로 \nT. 02-3445-4077\n*서면청약서 \n출금동의서/계약체결동의서\nF.02-2200-2900\n(자동인식/ 안되면 총무님께 팩스 후 확인 요청)\nsh15051@nate,com\n신계약 미결관련 문의 외에는\nGA솔루션 센터(1588-2066/법인지사총무님가능) 또는 콜센터(1588-5580/고객님가능)로 문의",
    "noteText": "전산 헬프데스크 - 02-3455-4119\n인콜 모니터링 T.1522-2285\n콜센터 T.1588-5580\n*서면청약서 \n출금동의서/계약체결동의서\nF.02-2200-2900(자동인식/ 안되면 총무님께 팩스 후 확인 요청)\n피보험자 서면동의서 업무 팩스 \nF.02-2275-9035",
    "roles": {
      "branchManager": {
        "name": "이주은",
        "phone": "010-7323-7479"
      },
      "viceBranchManager": {
        "name": "이휘원",
        "phone": "010-5833-6001"
      },
      "managers": [
        {
          "name": "백승주",
          "phone": "010-6609-5221"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "chubb-life",
    "categoryId": "life",
    "name": "처브라이프",
    "logoUrl": "./assets/company-logos/chubb-life.png",
    "homepageUrl": "https://www.chubblife.co.kr/",
    "systemLinkUrl": "http://esmart.chubblife.co.kr",
    "callCenter": "1599-4600",
    "inCallMonitoring": "1599-4600",
    "helpdesk": "1599-4646",
    "claimFax": "02-3480-7801",
    "termsUrl": "https://www.chubblife.co.kr/front/official/sale/list.do",
    "claimFormUrl": "https://www.chubblife.co.kr/front/ctmcenter/insurance/listDocu.do",
    "branchCode": "BGXH1",
    "assignee": "에이스사업단 IGA영업팀",
    "generalAffairsText": "어민진 총무\nT.1599-4646\nF.02-3480-7814\nace4779@nate.com",
    "noteText": "인콜 모니터링 T.1833-9513\n콜센터 T.1599-4600",
    "roles": {
      "branchManager": {
        "name": "김명건",
        "phone": "010-4336-8383"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "이채민",
          "phone": "010-3994-2407"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "fubonhyundai-life",
    "categoryId": "life",
    "name": "푸본현대생명",
    "logoUrl": "./assets/company-logos/fubonhyundai-life.png",
    "homepageUrl": "https://www.fubonhyundai.com/",
    "systemLinkUrl": "http://wsfa.fubonhyundai.com",
    "callCenter": "1577-3311",
    "inCallMonitoring": "080-860-1212",
    "helpdesk": "0505-106-0311",
    "claimFax": "",
    "termsUrl": "https://www.fubonhyundai.com/#CUSI150102010101",
    "claimFormUrl": "https://www.fubonhyundai.com/#CUSI070100000000",
    "branchCode": "1014989",
    "assignee": "GA영업팀",
    "generalAffairsText": "김형상 총무\n청약서FAX. 0505-106-0505\n동의서 FAX. 0505-106-0506\nGA헬프데스크 080-860-1212 \ngahelp01@nate.com",
    "noteText": "전산 헬프데스크 - 080-860-1212\n인콜 모니터링 없음\n콜센터 T.1577-3311",
    "roles": {
      "branchManager": {
        "name": "원대성",
        "phone": "010-5739-5960"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "조효정",
          "phone": "010-2312-4559"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "heungkuk-life",
    "categoryId": "life",
    "name": "흥국생명",
    "logoUrl": "./assets/company-logos/heungkuk-life.png",
    "homepageUrl": "https://www.heungkuklife.co.kr/",
    "systemLinkUrl": "https://e-life.heungkuklife.co.kr",
    "callCenter": "1588-2288",
    "inCallMonitoring": "1877-7006",
    "helpdesk": "031-786-8088",
    "claimFax": "콜센터 가상번호 부여",
    "termsUrl": "https://www.heungkuklife.co.kr/front/public/saleProduct.do?searchFlgSale=Y",
    "claimFormUrl": "https://www.heungkuklife.co.kr/jsps/front/help/customer_require_tab.jsp",
    "branchCode": "070118",
    "assignee": "테헤란GA점",
    "generalAffairsText": "장은경 총무\nT.02-755-0439\nF.0508-101-9260\nhk0000537@nate.com",
    "noteText": "전산 헬프데스크 T.031-786-8088\n인콜 모니터링 T.1877-7006\n콜센터 T.1588-2288",
    "roles": {
      "branchManager": {
        "name": "김대규",
        "phone": "010-9439-5734"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "김미애",
          "phone": "010-8213-7578"
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "hanwha-life",
    "categoryId": "life",
    "name": "한화생명",
    "logoUrl": "./assets/company-logos/hanwha-life.png",
    "homepageUrl": "https://www.hanwhalife.com/",
    "systemLinkUrl": "https://hmp.hanwhalife.com/online/ga",
    "callCenter": "1588-6363",
    "inCallMonitoring": "1800-6633",
    "helpdesk": "02-1522-6379",
    "claimFax": "콜센터 가상번호 부여",
    "termsUrl": "https://www.hanwhalife.com/main/disclosure/goods/disclosurenotice/DF_GDDN000_P10000.do?MENU_ID1=DF_GDGL000",
    "claimFormUrl": "https://www.hanwhalife.com/static/main/myPage/insurance/accident/document/MY_INAPADC_T10000.jsp",
    "branchCode": "18221",
    "assignee": "서울GA사업단",
    "generalAffairsText": "성현정 총무\nT.02-539-7285\nF.02-539-0041\nff91777@nate.com",
    "noteText": "전산 헬프데스크 T.1522-6379\n인콜 모니터링 T.1800-6633\n콜센터 T.1588-6363",
    "roles": {
      "branchManager": {
        "name": "박정환",
        "phone": "010-5220-7297"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "hana-life",
    "categoryId": "life",
    "name": "하나생명",
    "logoUrl": "./assets/company-logos/hana-life.png",
    "homepageUrl": "https://www.hanalife.co.kr/",
    "systemLinkUrl": "https://www.hanalife.co.kr/",
    "callCenter": "1577-1112",
    "inCallMonitoring": "1577-1112",
    "helpdesk": "02-6719-6722",
    "claimFax": "",
    "termsUrl": "https://www.hanalife.co.kr/anm/product/allProduct.do?status=on",
    "claimFormUrl": "https://www.hanalife.co.kr/csc/accidentGuideRenew/accidentPaymentDocument.do",
    "branchCode": "991092",
    "assignee": "GA사업부",
    "generalAffairsText": "이은경 총무\nT: 02-3709-7272 \nF: 02-6719-6720\n고객등록 및 설계동의서\nF. 02-3709-8601\nhana_celove2702@nate.com",
    "noteText": "전산 헬프데스크 T.02-3709-8602~3\n인콜 모니터링 T.1577-1112\n콜센터 T.1577-1112",
    "roles": {
      "branchManager": {
        "name": "최정민",
        "phone": "010-8037-8733"
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "이진규",
          "phone": "010-2150-4559"
        },
        {
          "name": "최성혜",
          "phone": "010-2915-0015"
        },
        {
          "name": "임은비",
          "phone": "010-3471-1597"
        }
      ]
    }
  },
  {
    "id": "kfcc-mutual",
    "categoryId": "mutual",
    "name": "MG새마을금고보험",
    "logoUrl": "https://logo.clearbit.com/kfcc.co.kr",
    "homepageUrl": "https://www.kfcc.co.kr/",
    "systemLinkUrl": "https://insu.kfcc.co.kr/main.do",
    "callCenter": "1599-9010",
    "inCallMonitoring": "콜센터 가상번호 부여",
    "helpdesk": "https://insu.kfcc.co.kr/ino/inoGuide.do",
    "claimFax": "https://insu.kfcc.co.kr/ics/cybIcsChargeProcessinfo.do",
    "termsUrl": "",
    "claimFormUrl": "",
    "branchCode": "",
    "assignee": "",
    "generalAffairsText": "",
    "noteText": "",
    "roles": {
      "branchManager": {
        "name": "",
        "phone": ""
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "ktcu-mutual",
    "categoryId": "mutual",
    "name": "더케이 교직원공제",
    "logoUrl": "https://logo.clearbit.com/ktcu.or.kr",
    "homepageUrl": "https://www.ktcu.or.kr/",
    "systemLinkUrl": "https://www.ktcu.or.kr/MH/MH-P010M01.do",
    "callCenter": "1577-3993",
    "inCallMonitoring": "02-3278-9696",
    "helpdesk": "https://www.ktcu.or.kr/IS/IS-P170M01.do",
    "claimFax": "https://www.ktcu.or.kr/IS/IS-P120T01.do",
    "termsUrl": "",
    "claimFormUrl": "",
    "branchCode": "",
    "assignee": "",
    "generalAffairsText": "",
    "noteText": "",
    "roles": {
      "branchManager": {
        "name": "",
        "phone": ""
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "epost-mutual",
    "categoryId": "mutual",
    "name": "우체국 보험",
    "logoUrl": "https://logo.clearbit.com/epostlife.go.kr",
    "homepageUrl": "https://epostlife.go.kr/",
    "systemLinkUrl": "https://epostlife.go.kr/LNLNDM10DM.do",
    "callCenter": "1599-0100",
    "inCallMonitoring": "지역별로 상이(콜센터 문의)",
    "helpdesk": "https://mall.epostbank.go.kr/IPPSKE0000.do",
    "claimFax": "https://epostlife.go.kr/IPDSDC0001.do",
    "termsUrl": "",
    "claimFormUrl": "",
    "branchCode": "",
    "assignee": "",
    "generalAffairsText": "",
    "noteText": "",
    "roles": {
      "branchManager": {
        "name": "",
        "phone": ""
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "suhyup-mutual",
    "categoryId": "mutual",
    "name": "수협공제",
    "logoUrl": "https://logo.clearbit.com/suhyup-bank.com",
    "homepageUrl": "https://www.suhyup-bank.com/",
    "systemLinkUrl": "https://www.suhyup-bank.com/",
    "callCenter": "1588-4119",
    "inCallMonitoring": "콜센터 가상번호 부여",
    "helpdesk": "https://www.suhyup-bank.com/ib20/mnu/FPD00127#859",
    "claimFax": "https://www.suhyup-bank.com/",
    "termsUrl": "",
    "claimFormUrl": "",
    "branchCode": "",
    "assignee": "",
    "generalAffairsText": "",
    "noteText": "",
    "roles": {
      "branchManager": {
        "name": "",
        "phone": ""
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  },
  {
    "id": "cu-mutual",
    "categoryId": "mutual",
    "name": "신협공제",
    "logoUrl": "https://logo.clearbit.com/cu.co.kr",
    "homepageUrl": "https://www.cu.co.kr/",
    "systemLinkUrl": "https://openbank.cu.co.kr/?sub=6000",
    "callCenter": "1544-3030",
    "inCallMonitoring": "콜센터 가상번호 부여",
    "helpdesk": "https://openbank.cu.co.kr/?sub=6000",
    "claimFax": "https://openbank.cu.co.kr/?sub=6000",
    "termsUrl": "",
    "claimFormUrl": "",
    "branchCode": "",
    "assignee": "",
    "generalAffairsText": "",
    "noteText": "",
    "roles": {
      "branchManager": {
        "name": "",
        "phone": ""
      },
      "viceBranchManager": {
        "name": "",
        "phone": ""
      },
      "managers": [
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        },
        {
          "name": "",
          "phone": ""
        }
      ]
    }
  }
];
