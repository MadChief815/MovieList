import React from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform,
    FlatList,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

// Custom Components
import { Colors } from '../Components/Styles/Colors';
import MovieCard from '../Components/MovieCard/MovieCard';

// Status Bar Height
const statusbarHeight = Platform.select({
    android: StatusBar.currentHeight || hp(2),
    ios: hp(3),
});

const ShortListedScreen = () => {

    const movies = useSelector((state) => state.shortlist.shortlist || []);

    return (
        <SafeAreaView style={Styles.MainCont}>
            <StatusBar
                translucent={true}
                backgroundColor={Colors.AdditionalBlack}
                barStyle={'light-content'}
            />
            {/* Title */}
            <Text style={Styles.title}>Favorite Movies</Text>
            {/* List */}
            {movies.length === 0 ? (
                <Text style={Styles.emptyText}>No favorite movies yet. Start adding some!</Text>
            ) : (
                <FlatList
                    data={movies}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={Styles.listContainer}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    renderItem={({ item }) => <MovieCard movie={item} />}
                />
            )}
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    MainCont: {
        flex: 1,
        backgroundColor: Colors.AdditionalBlack,
        paddingTop: statusbarHeight
    },
    title: {
        fontSize: hp(3.1),
        color: "#FFFFFF",
        fontWeight: "600",
        paddingVertical: hp(2.05),
        textAlign: "center"
    },
    listContainer: {
        paddingBottom: hp(2),
    },
    emptyText: {
        fontSize: hp(2.5),
        color: Colors.Grayscale500,
        textAlign: "center",
        marginTop: hp(5),
        fontStyle: "italic",
    },
});

export default ShortListedScreen;