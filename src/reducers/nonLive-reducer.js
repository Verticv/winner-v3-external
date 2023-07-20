import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import england from "../images/nonLivePage/CenterAccordion/Flag.png";
import spain from "../images/nonLivePage/CenterAccordion/Flag1.png";
import germany from "../images/nonLivePage/CenterAccordion/Flag2.png";

const nonLiveSlice = createSlice({
  name: "nonLive",
  initialState: {
    data: [
      {
        id: 1,
        title: "축구 / 잉글랜드 - 프리미어리그",
        icon: england, // TODO: update this
        date: "2023-03-22 13:00",
        isFavorite: false,
        teams: [
          {
            id: 1,
            team1: "아스널",
            team2: "리버풀",
            score1: 1.25,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.15,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.16,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+123",
            isFavorite: false,
          },
          {
            id: 2,
            team1: "첼시",
            team2: "토트넘",
            score1: 2.25,
            score2: 3.88,
            score3: 2.76,
            difference: "+45",
            isFavorite: false,
          },
        ],
      },
      {
        id: 2,
        title: "축구 / 스페인 - 라리가",
        icon: spain, // TODO: update this
        date: "2023-03-22 15:00",
        isFavorite: false,
        teams: [
          {
            id: 3,
            team1: "FC바르셀로나",
            team2: "아틀레티코",
            score1: 2.21,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 2.99,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 3.86,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+24",
            isFavorite: false,
          },
          {
            id: 4,
            team1: "레알마드리드",
            team2: "레알베티스",
            score1: 1.77,
            score2: 3.87,
            score3: 3.76,
            difference: "+55",
            isFavorite: false,
          },
          {
            id: 5,
            team1: "비야레알",
            team2: "마요르카",
            score1: 2.34,
            score2: 3.88,
            score3: "2.90",
            difference: "+132",
            isFavorite: false,
          },
        ],
      },
      {
        id: 3,
        title: "축구 / 독일 - 분데스리가",
        icon: germany, // TODO: update this
        date: "2023-03-22 17:00",
        isFavorite: false,
        teams: [
          {
            id: 6,
            team1: "아인트라흐트프랑크푸르트",
            team2: "SC프라이부르크",
            score1: 1.11,
            score1ArrowUp: true,
            score1ArrowDown: false,
            score2: "3.10",
            score2ArrowUp: true,
            score2ArrowDown: false,
            score3: 1.77,
            score3ArrowUp: false,
            score3ArrowDown: true,
            difference: "+99",
            isFavorite: false,
          },
          {
            id: 7,
            team1: "바이어레버쿠젠",
            team2: "바이에른뮌헨",
            score1: 33.65,
            score1ArrowUp: false,
            score1ArrowDown: true,
            score2: 33.88,
            score2ArrowUp: false,
            score2ArrowDown: true,
            score3: 33.65,
            score3ArrowUp: true,
            score3ArrowDown: false,
            difference: "+44",
            isFavorite: false,
          },
          {
            id: 8,
            team1: "RB라이프치히",
            team2: "FC샬케04",
            score1: 2.78,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: "3.90",
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 2.99,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+155",
            isFavorite: false,
          },
          {
            id: 9,
            team1: "보루시아도르트문트",
            team2: "FSV마인츠05",
            score1: "",
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: "",
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: "",
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+99",
            isFavorite: false,
          },
        ],
      },
      {
        id: 4,
        title: "축구 / 스페인 - 라리가",
        icon: spain, // TODO: update this
        date: "2023-03-22 19:00",
        isFavorite: false,
        teams: [
          {
            id: 10,
            team1: "세비야",
            team2: "지로나",
            score1: 1.67,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.12,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.64,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+45",
            isFavorite: false,
          },
          {
            id: 11,
            team1: "레알소스에다드",
            team2: "카디스",
            score1: "2.10",
            score2: 3.79,
            score3: 3.87,
            difference: "+99",
            isFavorite: false,
          },
        ],
      },
      {
        id: 5,
        title: "축구 / 잉글랜드 - 프리미어리그",
        icon: england, // TODO: update this
        date: "2023-03-22 13:00",
        isFavorite: false,
        teams: [
          {
            id: 12,
            team1: "아스널",
            team2: "리버풀",
            score1: 1.25,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.15,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.16,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+123",
            isFavorite: false,
          },
          {
            id: 13,
            team1: "첼시",
            team2: "토트넘",
            score1: 2.25,
            score2: 3.88,
            score3: 2.76,
            difference: "+45",
            isFavorite: false,
          },
        ],
      },
      {
        id: 6,
        title: "축구 / 스페인 - 라리가",
        icon: spain, // TODO: update this
        date: "2023-03-22 15:00",
        isFavorite: false,
        teams: [
          {
            id: 14,
            team1: "FC바르셀로나",
            team2: "아틀레티코",
            score1: 2.21,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 2.99,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 3.86,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+24",
            isFavorite: false,
          },
          {
            id: 15,
            team1: "레알마드리드",
            team2: "레알베티스",
            score1: 1.77,
            score2: 3.87,
            score3: 3.76,
            difference: "+55",
            isFavorite: false,
          },
          {
            id: 16,
            team1: "비야레알",
            team2: "마요르카",
            score1: 2.34,
            score2: 3.88,
            score3: "2.90",
            difference: "+132",
            isFavorite: false,
          },
        ],
      },
      {
        id: 7,
        title: "축구 / 독일 - 분데스리가",
        icon: germany, // TODO: update this
        date: "2023-03-22 17:00",
        isFavorite: false,
        teams: [
          {
            id: 17,
            team1: "아인트라흐트프랑크푸르트",
            team2: "SC프라이부르크",
            score1: 1.11,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: "3.10",
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.77,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+99",
            isFavorite: false,
          },
          {
            id: 18,
            team1: "바이어레버쿠젠",
            team2: "바이에른뮌헨",
            score1: 2.65,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.88,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 2.12,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+44",
            isFavorite: false,
          },
          {
            id: 19,
            team1: "RB라이프치히",
            team2: "FC샬케04",
            score1: 2.78,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: "3.90",
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 2.99,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+155",
            isFavorite: false,
          },
          {
            id: 20,
            team1: "보루시아도르트문트",
            team2: "FSV마인츠05",
            score1: 2.25,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 4.15,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 2.22,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+99",
            isFavorite: false,
          },
        ],
      },
      {
        id: 8,
        title: "축구 / 스페인 - 라리가",
        icon: spain, // TODO: update this
        date: "2023-03-22 19:00",
        isFavorite: false,
        teams: [
          {
            id: 21,
            team1: "세비야",
            team2: "지로나",
            score1: 1.67,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.12,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.64,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+45",
            isFavorite: false,
          },
          {
            id: 22,
            team1: "레알소스에다드",
            team2: "카디스",
            score1: "2.10",
            score2: 3.79,
            score3: 3.87,
            difference: "+99",
            isFavorite: false,
          },
        ],
      },
      {
        id: 9,
        title: "축구 / 잉글랜드 - 프리미어리그",
        icon: england, // TODO: update this
        date: "2023-03-22 17:00",
        isFavorite: false,
        teams: [
          {
            id: 23,
            team1: "아스널",
            team2: "리버풀",
            score1: 1.25,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.15,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.16,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+123",
            isFavorite: false,
          },
          {
            id: 24,
            team1: "첼시",
            team2: "토트넘",
            score1: 2.25,
            score2: 3.88,
            score3: 2.76,
            difference: "+45",
            isFavorite: false,
          },
        ],
      },
      {
        id: 10,
        title: "축구 / 스페인 - 라리가",
        icon: spain, // TODO: update this
        date: "2023-03-22 19:00",
        isFavorite: false,
        teams: [
          {
            id: 25,
            team1: "세비야",
            team2: "지로나",
            score1: 1.67,
            score1ArrowUp: false,
            score1ArrowDown: false,
            score2: 3.12,
            score2ArrowUp: false,
            score2ArrowDown: false,
            score3: 1.64,
            score3ArrowUp: false,
            score3ArrowDown: false,
            difference: "+45",
            isFavorite: false,
          },
          {
            id: 26,
            team1: "레알소스에다드",
            team2: "카디스",
            score1: "2.10",
            score2: 3.79,
            score3: 3.87,
            difference: "+99",
            isFavorite: false,
          },
        ],
      },
    ],
    betSlip: {
      data: [],
      isSingle: true,
    },
    liveGame: {
      data: [],
    },
  },
  reducers: {
    setNonLiveData: (_state, action) => ({
      ...action.payload,
      data: action.payload,
    }),
    setBetSlipData: (_state, action) => ({
      ..._state,
      betSlip: {
        data: [
          ..._state.betSlip.data,
          { ...action.payload.data, id: uuidv4() },
        ],
        isSingle: Boolean(
          [..._state.betSlip.data, action.payload.data].length <= 1
        ),
      },
    }),
    setLiveGameData: (_state, action) => ({
      ..._state,
      liveGame: {
        data: [..._state.liveGame.data, { ...action.payload, id: uuidv4() }],
      },
    }),
    deleteBetSlipCardById: (_state, action) => ({
      ..._state,
      betSlip: {
        data: [..._state.betSlip.data].filter(
          (item) => item.id !== action.payload.id
        ),
        isSingle: Boolean(
          [..._state.betSlip.data].filter(
            (item) => item.id !== action.payload.id
          ).length <= 1
        ),
      },
    }),
    deleteAllBetSlipCards: (_state, action) => ({
      ..._state,
      betSlip: {
        data: [],
        isSingle: true,
      },
    }),
  },
});

const { actions, reducer } = nonLiveSlice;
export const {
  setNonLiveData,
  setBetSlipData,
  deleteBetSlipCardById,
  deleteAllBetSlipCards,
  setLiveGameData,
} = actions;
export default reducer;
