import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Custom Components
import { addMovie, removeMovie } from "../../Src/shortlistSlice";
import { Colors } from "../Styles/Colors";

// SVGs
import HeartIcon from "../../assets/SVG/MovieCard/heart.svg";

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.shortlist.shortlist?.some(fav => fav.id === movie.id) || false);

    const onFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeMovie(movie.id));
        } else {
            dispatch(addMovie(movie));
        }
    };

    return (
        <View style={styles.movieCard}>
            <View style={styles.moviePoster}>
                <Image
                    source={{ uri: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500" }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.overlay}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={onFavoriteClick}
                        style={[styles.favoriteBtn, isFavorite && styles.active]}
                    >
                        <HeartIcon width={hp(2.6)} height={hp(2.6)} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.movieInfo}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.releaseDate}>{movie.release_date?.split("-")[0]}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    movieCard: {
        backgroundColor: Colors.Grayscale900,
        borderRadius: hp(1.3),
        overflow: "hidden",
        marginBottom: hp(2.05),
        flex: 1,
        marginHorizontal: 10
    },
    moviePoster: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: hp(30.7),
        borderRadius: hp(1.3),
    },
    overlay: {
        position: "absolute",
        top: hp(1.3),
        right: hp(1.3),
    },
    favoriteBtn: {
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: hp(1),
        borderRadius: hp(2.6),
    },
    active: {
        backgroundColor: "#D32F2F",
    },
    movieInfo: {
        padding: hp(1.3),
    },
    title: {
        fontSize: hp(2.05),
        fontWeight: "bold",
        color: Colors.Grayscale50,
    },
    releaseDate: {
        fontSize: hp(1.8),
        color: Colors.Grayscale500,
        fontWeight: "400"
    },
});

export default MovieCard;
